import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919799666500?text=Hello%20VaultMind%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
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
        hover:w-[240px]
        h-[64px]
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          h-16
          w-16
          min-w-[64px]
          items-center
          justify-center
          rounded-full
          bg-white/15
          backdrop-blur-md
        "
      >
        <MessageCircle size={24} />
      </div>

      {/* TEXT */}

      <div
        className="
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
          WhatsApp Us
        </div>

        <div className="text-[11px] opacity-90">
          Usually replies in minutes
        </div>
      </div>

      {/* ONLINE DOT */}

      <span
        className="
          absolute
          right-3
          top-3
          h-3
          w-3
          rounded-full
          bg-lime-300
          ring-2
          ring-white
        "
      />
    </a>
  );
}
