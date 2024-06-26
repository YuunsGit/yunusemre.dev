"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "@/providers/chat-provider";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Plane from "@/assets/icons/plane.svg";
import { z } from "zod";
import { useAssistant } from "ai/react";

import Loading from "@/assets/icons/loading.svg";
import XMark from "@/assets/icons/x-mark.svg";
import { AnimatePresence, motion } from "framer-motion";

const premadeQuestions = [
  {
    buttonName: "Who are you",
    question: "Who are you?",
  },
  {
    buttonName: "Favorite language",
    question: "What's your favorite programming language?",
  },
  {
    buttonName: "Experience",
    question: "Tell me about your work experience.",
  },
  {
    buttonName: "Projects",
    question: "Tell me about your projects.",
  },
  {
    buttonName: "Current job",
    question: "Tell me about your current position.",
  },
  {
    buttonName: "Certifications",
    question: "Do you have certifications?",
  },
];

const messageSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/.*[^ ].*/);

export default function Chat() {
  const { chatOpen, setChatOpen } = useContext(ChatContext);

  const scrollBottomAnchor = useRef<HTMLDivElement>(null);
  const [rateLimited, setRateLimited] = useState(false);
  const [ip, setIp] = useState("1.1.1.1");

  const {
    status,
    messages,
    input,
    submitMessage,
    handleInputChange,
    error,
    append,
    setInput,
  } = useAssistant({
    api: "/api/assistant",
    body: {
      ip,
    },
  });

  const scrollToBottom = () => {
    if (scrollBottomAnchor?.current) {
      scrollBottomAnchor.current.scrollTo({
        top: scrollBottomAnchor.current.scrollHeight,
      });
    }
  };

  useEffect(() => {
    fetch("https://freeipapi.com/api/json")
      .then((res) => res.json())
      .then((loc) => setIp(loc.ipAddress));
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (
      (error as { message: string })?.message &&
      (error as { message: string }).message.includes("rateLimit") &&
      !rateLimited
    ) {
      setRateLimited(true);
      append({
        role: "assistant",
        content: "I think we talked too much today. Let's continue tomorrow.",
      });
    }
  }, [error]);

  return (
    <AnimatePresence>
      {chatOpen && (
        <motion.section
          id="chat"
          className="relative z-0 scroll-mt-16 overflow-visible before:absolute before:-inset-6 before:top-0 before:-z-10 before:rounded-3xl before:bg-slate-200 before:content-['']"
          aria-label="Yunus Emre AI clone"
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            marginBottom: "6rem",
          }}
          exit={{
            opacity: 0,
            height: 0,
            marginBottom: 0,
          }}
        >
          <div className="relative flex flex-col justify-between">
            <Button
              size="icon"
              className="absolute -top-12 left-[calc(100%-1rem)] z-10 rounded-full hover:bg-slate-200 xl:left-[calc(100%+2rem)] xl:top-0"
              variant="ghost"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              <XMark className="size-4" aria-hidden="true" />
            </Button>
            <div
              ref={scrollBottomAnchor}
              className="chatbox scrolling-touch scrolling-gpu relative mr-auto h-96 w-full space-y-4 overflow-y-auto overscroll-auto direction-reverse md:h-72"
            >
              <div className="sticky top-0 h-12 w-full" aria-hidden="true" />
              <div className="mr-auto w-10/12 max-w-fit rounded-2xl rounded-tl-none bg-skeptic-400 px-5 py-2.5 transition-all">
                <p className="text-sm font-medium text-white">
                  Hey! What would you like to learn about me?
                </p>
              </div>
              {messages.map((message) => {
                if (message.role === "user") {
                  return (
                    <div
                      className="ml-auto w-8/12 max-w-fit rounded-2xl rounded-br-none bg-slate-300 px-5 py-2.5"
                      key={message.id}
                    >
                      <p className="text-sm font-medium text-skeptic-900">
                        {message.content}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="mr-auto w-11/12 max-w-fit rounded-2xl rounded-tl-none bg-skeptic-400 px-5 py-2.5 transition-all"
                      key={message.id}
                    >
                      <p
                        className="whitespace-pre-line text-sm font-medium text-white"
                        dangerouslySetInnerHTML={{
                          __html: message.content
                            .replace(/ *【.*】 */g, "")
                            .replace(/ *\[.*] */g, "")
                            .replace(/\.{2,}/g, ".")
                            .replace(" .", ".")
                            .replace(
                              /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi,
                              "<a href='$1' target='_blank' rel='noopener noreferrer' class='bg-skeptic-100 rounded-lg px-2 text-skeptic-900 hover:bg-skeptic-200 mx-1 transition-all'>$3</a>",
                            ),
                        }}
                      ></p>
                    </div>
                  );
                }
              })}
              {status === "in_progress" &&
                messages[messages.length - 1]?.role === "user" && (
                  <Loading className="ml-4 size-10" />
                )}
            </div>
            <ul
              className="questions mt-8 flex gap-1 overflow-x-auto overflow-y-visible"
              aria-label="Premade questions"
            >
              {premadeQuestions.map((q) => (
                <li key={q.buttonName}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs text-skeptic-900"
                    onClick={() => {
                      setInput(q.question);
                    }}
                    aria-label={`Ask ${q.buttonName}`}
                  >
                    {q.buttonName}
                  </Button>
                </li>
              ))}
            </ul>
            <form
              className="mt-2 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (messageSchema.safeParse(input).success) submitMessage();
              }}
            >
              <Input
                value={input}
                onChange={(event) =>
                  event.target.value.length < 80 && handleInputChange(event)
                }
                className="border-2 text-skeptic-900 !ring-skeptic-600"
                placeholder="Ask a question"
                disabled={rateLimited || !!error}
              />
              <Button
                className="bg-skeptic-500 !ring-skeptic-600 hover:bg-skeptic-400"
                type="submit"
                size="icon"
                disabled={
                  !input || rateLimited || !!error || status === "in_progress"
                }
                aria-label="Send message"
              >
                <Plane className="size-5" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
