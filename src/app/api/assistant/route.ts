import { AssistantResponse, InvalidResponseDataError } from "ai";
import OpenAI from "openai";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

const redis = new Redis({
  url: process.env["UPSTASH_REDIS_REST_URL"],
  token: process.env["UPSTASH_REDIS_REST_TOKEN"],
});

const rateLimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(24, "24 h"),
  analytics: true,
});

export async function POST(req: Request) {
  // Parse the request body
  const input: {
    threadId: string | null;
    message: string;
    ip: string;
  } = await req.json();

  const { success } = await rateLimit.limit(input.ip);

  if (!success) {
    return Response.json({ rateLimit: "Rate limited" });
  }

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: input.message,
  });

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id:
          process.env.ASSISTANT_ID ??
          (() => {
            throw new Error("ASSISTANT_ID is not set");
          })(),
      });

      // forward run status would stream message deltas
      await forwardStream(runStream);
    },
  );
}
