import { useState, useEffect, useRef } from "react";

import {
  Sparkles,
  X,
  Send,
} from "lucide-react";

import { knowledgeBase }
from "../../data/knowledgeBase";

export default function VaultMindAI() {
  const [open, setOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

    type Message = {
    sender: "user" | "bot";
    text: string;
    };

    const [messages, setMessages] =
    useState<Message[]>(() => {
    const saved =
        sessionStorage.getItem(
        "vaultmind-ai-chat"
        );

    return saved
        ? JSON.parse(saved)
        : [
            {
            sender: "bot",
            text:
                "👋 Welcome to VaultMind AI Assistant.\n\nI can help you with ERP, CRM, AI Automation, Websites, Mobile Apps, Custom Software and Digital Transformation.\n\nHow can I help you today?",
            },
        ];
    });


  const processMessage = (
    question: string
    ) => {
    const query =
        question.toLowerCase();

    let reply = "";

    if (
    query.includes("hi") ||
    query.includes("hello") ||
    query.includes("hey") ||
    query.includes("good morning") ||
    query.includes("good evening")
    ) {
        reply =
        "👋 Hello! Welcome to VaultMind Solutions. How can I help you today?";
    }

    else if (
        query.includes("your name") ||
        query.includes("ur name") ||
        query.includes("who r u") ||
        query.includes("who are you")
    ) {
        reply =
        "I am VaultMind AI Assistant, your virtual business and technology consultant.";
    }

    else if (
        query.includes("how are you") ||
        query.includes("how r u")
    ) {
        reply =
        "😊 I'm doing great. Thanks for asking. How can I help you today?";
    }

    else if (
        query.includes("thank") ||
        query.includes("thank you") ||
        query.includes("thank u") ||
        query.includes("thanks")
        )
        {
        reply =
            "You're welcome 😊. Let me know if you need any information about ERP, CRM, AI Automation, Websites, Mobile Apps or Custom Software.";
        }
    
    else if (
        query.includes("help")
        )
        {
        reply =
            "I can help you with ERP Systems, CRM Software, AI Automation, Website Development, Mobile Applications, Custom Software, Digital Transformation and Business Solutions.";
        }

    else {
        reply =
        "I couldn't fully understand that request. Please ask about ERP, CRM, AI Automation, Websites, Mobile Apps, Software Development or Business Solutions.";

        for (const item of knowledgeBase) {
        if (
            item.keywords.some((keyword) =>
            query.includes(
                keyword.toLowerCase()
            )
            )
        ) {
            reply = item.answer;
            break;
        }
        }
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
      {
        sender: "bot",
        text: reply,
      },
    ]);
  };

    const messagesEndRef =
    useRef<HTMLDivElement>(null);

    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
    });
    }, [messages]);

    useEffect(() => {
    sessionStorage.setItem(
        "vaultmind-ai-chat",
        JSON.stringify(messages)
    );
    }, [messages]);

    useEffect(() => {
    const timer = setTimeout(() => {
        setOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
    }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    processMessage(input);

    setInput("");
  };

  return (
    <>
      {/* FLOATING BUTTON */}

        <button
        onClick={() => setOpen(!open)}
        className="
        fixed
        bottom-6
        right-6
        z-[9999]
        group
        flex
        items-center
        Need Help?
        justify-start
        overflow-hidden
        rounded-full
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-sky-500
        text-white
        shadow-[0_20px_60px_rgba(37,99,235,0.35)]
        transition-all
        duration-500
        ease-out
        w-[64px]
        hover:w-[240px]
        h-[64px]
        "
        >
        <div className="relative">
        <span
            className="
            absolute
            inset-0
            rounded-full
            animate-ping
            bg-white/30
            "
        />

        <div
            className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-white/15
            "
        >
            <Sparkles size={24} />
        </div>
        </div>

            <div className="
                ml-3
                whitespace-nowrap
                opacity-0
                translate-x-4
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:translate-x-0
            "
            >
            <div className="font-bold text-sm">
            VaultMind AI Assistant
            </div>

            <div className="text-[11px] opacity-80">
            ERP • CRM • AI • Software
            </div>
            </div>
        </button>

      {/* CHAT WINDOW */}

      {open && (
        <div
            className="
            fixed
            bottom-24
            right-6
            z-[9999]
            flex
            h-[70vh]
            md:h-[75vh]
            max-h-[720px]
            w-[420px]
            max-w-[95vw]
            flex-col
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            "
        >
            {/* HEADER */}

            <div
            className="
                flex
                items-center
                justify-between
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-sky-500
                px-5
                py-4
                text-white
            "
            >
            <div className="flex items-center gap-3">
                <div
                className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                "
                >
                <Sparkles size={20} />
                </div>

                <div>
                <h3 className="font-bold">
                    VaultMind AI Assistant
                </h3>

                <p className="text-xs text-blue-100">
                    AI • ERP • CRM • Websites • Apps
                </p>
                </div>
            </div>

            <button
                onClick={() => setOpen(false)}
                className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/15
                transition-all
                hover:bg-white/25
                "
            >
                <X size={18} />
            </button>
            </div>

            {/* QUICK QUESTIONS */}

{/*}            <div className="border-b bg-slate-50 p-3">
            <div className="flex flex-wrap gap-2">
                {quickQuestions.map((item) => (
                <button
                    key={item}
                    onClick={() =>
                    processMessage(item)
                    }
                    className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-slate-700
                    hover:border-blue-500
                    hover:text-blue-600
                    "
                >
                    {item}
                </button>
                ))}
            </div>
            </div>

*/}
            {/* MESSAGES */}

            <div
            className="
                flex-1
                overflow-y-auto
                bg-slate-50
                p-4
                space-y-4
            "
            >
            {messages.map((msg, index) => (
                <div
                key={index}
                className={`flex ${
                    msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
                
                >
                <div
                    className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-700 shadow"
                    }`}
                >
                    {msg.text}

                </div>
                </div>
            ))}

            <div ref={messagesEndRef} />

            </div>

            {/* INPUT */}

            <div className="border-t bg-white p-3">
            <div className="flex items-center gap-2">
                <input
                value={input}
                autoComplete="off"
                onChange={(e) =>
                    setInput(e.target.value)
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                    handleSend();
                    }
                }}
                placeholder="Ask VaultMind AI..."
                className="
                    flex-1
                    rounded-2xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                "
                />

                <button
                onClick={handleSend}
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-white
                    transition-all
                    hover:scale-105
                "
                >
                <Send size={18} />
                </button>
            </div>
            </div>
        </div>
        )}
    </>
  );
}
