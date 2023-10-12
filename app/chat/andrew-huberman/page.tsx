"use client";

import { useRef } from "react";
import { useChat } from "ai/react";
import clsx from "clsx";
import {
  VercelIcon,
  GithubIcon,
  LoadingCircle,
  SendIcon,
  UserIcon,
  SendArrow,
} from "../../icons";
import Textarea from "react-textarea-autosize";
import Image from "next/image";
import { people } from "@/app/people";
import Link from "next/link";

const examples = [
  "To be or not to be",
  "All the world's a stage",
  "What is the meaning of life?",
];

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    onResponse: (response) => {
      if (response.status === 429) {
        window.alert("You have reached your request limit for the day.");
        return;
      }
    },
  });

  const disabled = isLoading || input.length === 0;

  return (
    <main className="flex justify-center pt-10 pb-40 bg-black jus">
      <div className="w-full max-w-screen-lg">
        <div className="flex items-center w-full text-4xl">
          <Link href="/">
            <Image
              src="/back.svg"
              alt=""
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <div className="pl-3 font-medium text-white">ANDREW HUBERMAN</div>
        </div>
        <div className="font-inter">
          {messages.map((message, i) => (
            <div
              key={i}
              className={clsx(
                "flex w-full items-center justify-center py-4",
                message.role === "user" ? "bg-black" : "bg-black",
              )}
            >
              <div className="flex items-start w-full px-5 space-x-4 sm:px-0">
                <div
                  className={clsx(
                    message.role === "assistant"
                      ? "bg-white"
                      : "bg-black p-1.5 text-white",
                  )}
                >
                  {message.role === "user" ? (
                    <UserIcon />
                  ) : (
                    <div className="relative w-20 h-20 overflow-hidden bg-black rounded-full">
                      <Image src="/andrew.png" alt="Shakespeare" fill />
                    </div>
                  )}
                </div>
                <div className="prose prose-p:leading-relaxed mt-1 w-full text-[#ffffffb3] break-words">
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          <div className="fixed flex flex-col items-center w-full max-w-screen-lg space-y-3 bottom-6 sm:px-0">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative w-full rounded-full border border-[#525252] bg-black px-4 pb-2 pt-3 sm:pb-3 sm:pt-4"
            >
              <Textarea
                ref={inputRef}
                tabIndex={0}
                required
                rows={1}
                autoFocus
                placeholder="Send a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    formRef.current?.requestSubmit();
                    e.preventDefault();
                  }
                }}
                spellCheck={false}
                className="w-full pl-4 mt-0.5 focus:outline-none bg-black placeholder:text-[rgba(255,255,255,0.5)] text-white font-inter font-normal"
              />
              <button
                className={clsx(
                  "absolute inset-y-0 right-3 my-auto flex h-9 w-9 items-center justify-center rounded-full transition-all",
                  disabled
                    ? "cursor-not-allowed bg-white"
                    : "bg-green-500 hover:bg-green-600",
                )}
                disabled={disabled}
              >
                {isLoading ? (
                  <LoadingCircle />
                ) : (
                  <SendArrow
                    className={clsx(
                      "h-4 w-4",
                      input.length === 0 ? "text-gray-300" : "text-white",
                    )}
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
