"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export const ChatContext = createContext<{
  chatOpen: boolean;
  setChatOpen: Dispatch<SetStateAction<boolean>>;
}>({
  chatOpen: false,
  setChatOpen: () => {},
});

export default function ChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  return (
    <ChatContext.Provider value={{ chatOpen, setChatOpen }}>
      {children}
    </ChatContext.Provider>
  );
}
