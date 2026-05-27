"use client";

import { useEffect, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const DAILY_LIMIT = 3;
const STORAGE_KEY = "portfolio_chat_limit";

const suggestedQuestions = [
  "Siapa Luthfi Emillulfata?",
  "Apa skill utama Luthfi?",
  "Project apa saja yang pernah dibuat?",
  "Apakah Luthfi cocok untuk posisi Frontend Developer?",
  "Bagaimana cara menghubungi Luthfi?",
];

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

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Halo! Saya chatbot portfolio. Kamu bisa bertanya tentang skill, project, pengalaman, pendidikan, atau kontak saya.",
    },
  ]);

  const [input, setInput] = useState("");
  const [remaining, setRemaining] = useState(DAILY_LIMIT);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const limit = getChatLimit();
    saveChatLimit(limit.count);
    setRemaining(DAILY_LIMIT - limit.count);
  }, []);

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
          text: "Batas pertanyaan hari ini sudah habis. Silakan coba lagi besok.",
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
        throw new Error(data.error || "Gagal mengirim pesan.");
      }

      const newCount = limit.count + 1;
      saveChatLimit(newCount);
      setRemaining(DAILY_LIMIT - newCount);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply || "Maaf, saya tidak dapat menjawab saat ini.",
        },
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Maaf, terjadi kesalahan. Silakan coba lagi nanti.";

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

  return (
    <section className="fixed bottom-4 right-4 z-50 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white p-4">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            AI Portfolio Assistant
          </h2>
          <p className="text-xs text-slate-500">
            Sisa pertanyaan hari ini: {remaining}/{DAILY_LIMIT}
          </p>
        </div>

        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          AI
        </div>
      </div>

      <div className="h-80 space-y-3 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-xl p-3 text-sm leading-6 ${
              message.role === "user"
                ? "ml-8 bg-slate-900 text-white"
                : "mr-8 bg-slate-100 text-slate-800"
            }`}
          >
            {message.text}
          </div>
        ))}

        {messages.length === 1 && remaining > 0 && (
          <div className="space-y-2 pt-2">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => sendMessage(question)}
                disabled={loading || remaining <= 0}
                className="block rounded-full border border-slate-200 bg-white px-4 py-2 text-left text-xs text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                ✨ {question}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="mr-8 rounded-xl bg-slate-100 p-3 text-sm text-slate-500">
            Sedang mengetik...
          </div>
        )}

        {remaining <= 0 && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700">
            Limit pertanyaan hari ini sudah habis. Silakan coba lagi besok.
          </div>
        )}
      </div>

      <div className="flex gap-2 border-t border-slate-200 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          disabled={loading || remaining <= 0}
          placeholder={
            remaining <= 0
              ? "Limit hari ini sudah habis"
              : "Tulis pertanyaan..."
          }
          className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900 disabled:bg-slate-100"
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading || remaining <= 0}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          Kirim
        </button>
      </div>
    </section>
  );
}