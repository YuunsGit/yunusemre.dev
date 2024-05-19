"use client";

import React, { useContext } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Sparkles from "@/assets/icons/sparkles.svg";
import { ChatContext } from "@/providers/chat-provider";
import { useRouter } from "next/navigation";

export default function ButtonGroup() {
  const { setChatOpen } = useContext(ChatContext);
  const router = useRouter();

  return (
    <div className="mt-8 flex gap-4">
      <Button
        asChild={false}
        size="sm"
        className="bg-skeptic-500 hover:bg-skeptic-400"
        onClick={() => {
          setChatOpen(true);
          router.push("#chat");
        }}
      >
        <Sparkles className="mr-2 size-5 fill-current" /> AI Clone
      </Button>
      <Button
        asChild
        size="sm"
        variant="outline"
        className="text-skeptic-700 hover:bg-slate-100 hover:text-skeptic-800"
      >
        <Link href="/resume.pdf" target="_blank">
          Resume
        </Link>
      </Button>
    </div>
  );
}
