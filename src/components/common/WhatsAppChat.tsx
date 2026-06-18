import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = `
Hello VaultMind Solutions

Name: ${name}
Phone: ${phone}

Message:
${message}
    `;

    window.open(
      `https://wa.me/919799666500?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <>
      {/* FLOATING BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-24
          right-6
          z-[9998]
          group
          flex
          items-center
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-green-500
          to-emerald-600
          text-white
          shadow-[0_20px_60px_rgba(34,197,94,0.35)]
          transition-all
          duration-500
          ease-out
          w-[64px]
          hover:w-[250px]
          h-[64px]
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            min-w-[64px]
            items-center
            justify-center
          "
        >
          <MessageCircle size={24} />
        </div>

        <div
          className="
            ml-2
            whitespace-nowrap
            opacity-0
            translate-x-4
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-x-0
          "
        >
          <div className="font-bold">
            WhatsApp Support
          </div>

          <div className="text-xs">
            Chat with our team
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
            w-[380px]
            max-w-[95vw]
            overflow-hidden
            rounded-[28px]
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
              from-green-500
              to-emerald-600
              px-5
              py-4
              text-white
            "
          >
            <div>
              <h3 className="font-bold">
                WhatsApp Support
              </h3>

              <p className="text-xs opacity-90">
                Usually replies within minutes
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="
                rounded-full
                p-2
                hover:bg-white/20
              "
            >
              <X size={18} />
            </button>
          </div>

          {/* FORM */}

          <div className="space-y-4 p-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                px-4
                py-3
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                px-4
                py-3
                outline-none
              "
            />

            <textarea
              rows={4}
              placeholder="How can we help you?"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                px-4
                py-3
                outline-none
              "
            />

            <button
              onClick={handleSend}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                px-5
                py-3
                font-semibold
                text-white
              "
            >
              Send To WhatsApp

              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
