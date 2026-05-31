"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const DAILY_LIMIT = 3;
const STORAGE_KEY = "portfolio_chat_limit";

const suggestedQuestions = [
  "What projects has he built?",
  "What is his tech stack?",
  "Tell me about his Flutter projects",
];

function BotIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M9 13v2" />
      <path d="M15 13v2" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

function getTodayDate() {
  return new Date().toLocaleDateString("en-CA");
}

function getChatLimit() {
  if (typeof window === "undefined") {
    return {
      date: getTodayDate(),
      count: 0,
    };
  }

  const today = getTodayDate();
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return {
      date: today,
      count: 0,
    };
  }

  try {
    const parsed = JSON.parse(stored);

    if (parsed.date !== today) {
      return {
        date: today,
        count: 0,
      };
    }

    return parsed;
  } catch {
    return {
      date: today,
      count: 0,
    };
  }
}

function saveChatLimit(count: number) {
  const today = getTodayDate();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      date: today,
      count,
    })
  );
}

function dispatchChatbotState(isOpen: boolean) {
  window.dispatchEvent(
    new CustomEvent("chatbot-state-change", {
      detail: {
        isOpen,
      },
    })
  );
}

export default function Chatbot() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi there! I'm Luthfi's AI assistant. Ask me anything about his skills, experience, projects, or education. You have 3 questions per day.",
    },
  ]);

  const [input, setInput] = useState("");
  const [remaining, setRemaining] = useState(DAILY_LIMIT);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatchChatbotState(isOpen);

    return () => {
      dispatchChatbotState(false);
    };
  }, [isOpen]);

  useEffect(() => {
    const limit = getChatLimit();
    saveChatLimit(limit.count);
    setRemaining(DAILY_LIMIT - limit.count);
  }, []);

  useEffect(() => {
    const handleToggleChatbot = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("toggle-chatbot", handleToggleChatbot);

    return () => {
      window.removeEventListener("toggle-chatbot", handleToggleChatbot);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  const sendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage || input;
    const trimmedInput = messageToSend.trim();

    if (!trimmedInput || loading) return;

    const limit = getChatLimit();

    if (limit.count >= DAILY_LIMIT) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "The daily question limit has been reached. Please try again tomorrow.",
        },
      ]);
      return;
    }

    const userMessage: ChatMessage = {
      role: "user",
      text: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      const newCount = limit.count + 1;
      saveChatLimit(newCount);
      setRemaining(DAILY_LIMIT - newCount);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply || "Sorry, I cannot answer right now.",
        },
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Sorry, something went wrong. Please try again later.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <section
      id="ai-chat"
      className="fixed bottom-10 left-1/2 z-70 flex h-[min(560px,calc(100vh-3rem))] w-[calc(100vw-2rem)] max-w-88 -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/40 sm:bottom-6 sm:right-6 sm:left-auto sm:h-[min(620px,calc(100vh-5rem))] sm:w-[calc(100vw-2rem)] sm:max-w-sm sm:translate-x-0 md:right-8"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3.5 dark:border-zinc-800 sm:px-5 sm:py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-zinc-800 dark:bg-white/4 dark:text-white sm:h-10 sm:w-10">
            <BotIcon />
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-sm font-bold tracking-tight text-slate-950 dark:text-white sm:text-base">
                Lut AI
              </h2>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700 dark:bg-white/8 dark:text-zinc-300 sm:px-3 sm:text-xs">
                {remaining}/{DAILY_LIMIT}
              </span>
            </div>

            <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400 sm:text-xs">
              Portfolio assistant
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close chatbot"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-red-100 hover:text-red-600 dark:text-zinc-500 dark:hover:bg-red-100 dark:hover:text-red-600 sm:h-9 sm:w-9 sm:text-xl"
        >
          ×
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:space-y-4 sm:px-5 sm:py-5">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[86%] rounded-3xl px-4 py-2.5 text-xs leading-6 shadow-sm sm:max-w-[85%] sm:px-5 sm:py-3 sm:text-sm sm:leading-7 ${
                message.role === "user"
                  ? "rounded-tr-md bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                  : "rounded-tl-md border border-slate-200 bg-slate-50 text-slate-700 dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-200"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {messages.length === 1 && remaining > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => sendMessage(question)}
                disabled={loading || remaining <= 0}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-left text-[11px] font-medium text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-white/6 dark:hover:text-white sm:px-4 sm:text-xs"
              >
                <SparkleIcon />
                {question}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex justify-start">
            <div className="inline-flex items-center gap-2 rounded-3xl rounded-tl-md border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-500 dark:border-zinc-800 dark:bg-white/4 dark:text-zinc-400 sm:px-5 sm:py-3">
              <span className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.2s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.1s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-current" />
            </div>
          </div>
        )}

        {remaining <= 0 && (
          <div className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-xs leading-6 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300 sm:px-5 sm:py-3 sm:text-sm">
            The daily question limit has been reached. Please try again
            tomorrow.
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-slate-200 p-3.5 dark:border-zinc-800 sm:p-4">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1.5 shadow-sm dark:border-zinc-800 dark:bg-white/4 sm:p-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
            disabled={loading || remaining <= 0}
            placeholder={
              remaining <= 0 ? "Limit has been reached" : "Ask something..."
            }
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs text-slate-950 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:text-slate-400 dark:text-white dark:placeholder:text-zinc-500 sm:text-sm"
          />

          <button
            type="button"
            onClick={() => sendMessage()}
            disabled={loading || remaining <= 0 || !input.trim()}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-950 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:bg-white dark:text-slate-950 dark:hover:bg-zinc-200 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500 sm:h-11 sm:w-11"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </section>
  );
}