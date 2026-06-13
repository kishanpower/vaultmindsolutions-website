import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
            "
            >
              <ShieldCheck size={16} />
              Secure Software • AI Solutions • Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
              mt-8
              text-5xl
              font-extrabold
              leading-tight
              text-slate-900
              md:text-6xl
            "
            >
              Transforming Ideas Into

              <span
                className="
                block
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent
              "
              >
                Powerful Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-slate-600
            "
            >
              VaultMind Solutions helps businesses
              build secure, scalable and intelligent
              software solutions — from custom
              applications and automation systems
              to AI-powered products and enterprise
              platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                className="
                group
                flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-7
                py-4
                font-semibold
                text-white
                shadow-xl
                transition-all
                hover:-translate-y-1
              "
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  group-hover:translate-x-1
                "
                />
              </button>

              <button
                className="
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-7
                py-4
                font-semibold
                text-slate-700
                transition-all
                hover:border-blue-500
                hover:text-blue-600
              "
              >
                Explore Services
              </button>
            </motion.div>

            <div className="mt-12 space-y-3">
              {[
                "Custom Software Development",
                "AI-Powered Solutions",
                "Business Automation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
