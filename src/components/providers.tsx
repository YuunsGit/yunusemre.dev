"use client";

import ChatProvider from "@/providers/chat-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChatProvider>{children}</ChatProvider>;
}
