"use client";

import Response from "@/components/Response";
import Message from "@/components/Message";
import { useEffect, useRef, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { handleSubmit } from "@/utils/chat";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [history, setHistory] = useState<Message[]>([]);
  const [msgInput, setMsgInput] = useState<string>("");
  const [audio] = useState(new Audio("../../assets/message.mp3"));
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState(false);

  const anchor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    if (anchor?.current) {
      anchor.current.scrollTo({
        top: anchor.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const sendMessage = () => {
    setMsgInput("");
    audio.play();
    setGenerating(true);

    const newHistory = [
      ...history,
      { role: "user", content: msgInput } as Message,
      { role: "assistant", content: "" } as Message,
    ];
    setHistory(newHistory);
    handleSubmit(history, msgInput).then((res) => {
      if (res) {
        const currentHistory = [...newHistory];
        currentHistory[currentHistory.length - 1].content = res;
        setHistory(currentHistory);
        audio.play();
        setGenerating(false);
      } else {
        const currentHistory = [...newHistory];
        currentHistory[currentHistory.length - 1].content =
          "An error occurred. Please try again later.";
        setHistory(currentHistory);
        setError(true);
      }
    });
  };

  return (
    <div className="space-y-4">
      <div
        ref={anchor}
        id="scrollbar"
        className="h-56 md:h-80 space-y-3 overflow-y-scroll"
      >
        <div className="sticky top-0 h-3 sm:h-10 w-full bg-gradient-to-b from-secondary to-transparent" />
        <Response message="Hey! What would you like to learn about me?" />
        {history.map((msg) => {
          if (msg.role === "user")
            return <Message key={msg.content} message={msg.content} />;
          else if (msg.role === "assistant")
            return (
              <Response key={msg.content} message={msg.content} error={error} />
            );
        })}
      </div>
      <div className="space-y-1.5">
        <div id="scrollbar" className="flex gap-x-1 text-sm overflow-x-scroll">
          <button
            disabled={error}
            onClick={() => setMsgInput("Who are you?")}
            className="py-1 px-1.5 bg-primary-300 rounded-lg text-white hover:bg-primary-200 transition-all whitespace-nowrap"
          >
            Who are you
          </button>
          <button
            disabled={error}
            onClick={() => setMsgInput("Tell me about your work experience.")}
            className="py-1 px-1.5 bg-primary-300 rounded-lg text-white hover:bg-primary-200 transition-all whitespace-nowrap"
          >
            Work experience
          </button>
          <button
            disabled={error}
            onClick={() => setMsgInput("Tell me about your personal projects.")}
            className="py-1 px-1.5 bg-primary-300 rounded-lg text-white hover:bg-primary-200 transition-all whitespace-nowrap"
          >
            Projects
          </button>
          <button
            disabled={error}
            onClick={() => setMsgInput("Where do you live?")}
            className="py-1 px-1.5 bg-primary-300 rounded-lg text-white hover:bg-primary-200 transition-all whitespace-nowrap"
          >
            Residence
          </button>
          <button
            disabled={error}
            onClick={() => setMsgInput("Tell me about your current job.")}
            className="py-1 px-1.5 bg-primary-300 rounded-lg text-white hover:bg-primary-200 transition-all whitespace-nowrap"
          >
            Current job
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (generating || error) return;
            if (msgInput) sendMessage();
          }}
          className="w-full flex items-stretch gap-x-2"
        >
          <input
            type="text"
            value={msgInput}
            onChange={(e) => {
              const val = e.target.value;
              if (val.length < 64) setMsgInput(val);
            }}
            className="w-full px-3 py-2 border-2 rounded-lg border-primary-200 border-opacity-50 outline-primary-500"
            placeholder="Type your message"
            disabled={error}
          />
          <button
            disabled={error}
            className="h-10 w-10 rounded-lg bg-primary-300 flex items-center justify-center text-ternary-500 hover:bg-primary-200 transition-all"
          >
            <PaperAirplaneIcon className="h-6 w-6 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
