"use server";

import OpenAI from "openai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  // @ts-ignore
  url: process.env["UPSTASH_REDIS_REST_URL"],
  token: process.env["UPSTASH_REDIS_REST_TOKEN"],
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(24, "24 h"),
});

const handleSubmit = async (thread: any, content: string, ip: string) => {
  try {
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return {
        error: "You asked enough questions today. Please come back tomorrow.",
      };
    }

    const openai = new OpenAI({
      apiKey: process.env["OPENAI_API_KEY"],
    });

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: content,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: "asst_wWwEubdYdb8FnPwb3x8cjh2M",
    });

    let response = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    while (response.status === "in_progress" || response.status === "queued") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      response = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    const messages = await openai.beta.threads.messages.list(thread.id);

    const lastMessage: any = messages.data
      .filter(
        (message: any) =>
          message.run_id === run.id && message.role === "assistant",
      )
      .pop();

    return lastMessage.content[0]["text"].value.replace(/ *【[^)]*】 */g, "");
  } catch (e) {
    console.log(e);
  }
};

const initChatBot = async () => {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
  });

  return openai.beta.threads.create();
};

export { handleSubmit, initChatBot };
