import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <>
      {/* ========================= */}
      {/* VIDEO BANNER */}
      {/* ========================= */}

      <section
        className="
          relative
          -mt-[20px]
          min-h-[110vh]
          overflow-hidden
          pt-[100px]
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/hero-banner.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                text-4xl
                font-extrabold
                leading-tight
                text-white
                md:text-5xl
                xl:text-6xl
              "
            >
              Empowering Businesses with

              <span className="block text-cyan-400">
                Custom Software & AI Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                mx-auto
                mt-10
                max-w-4xl
                text-center
                text-lg
                leading-8
                text-slate-200
              "
            >
              VaultMind Solutions helps startups,
              enterprises and growing businesses
              build secure software, intelligent
              automation systems and AI-powered
              digital products that drive measurable
              business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-10
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
                sm:justify-center
              "
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:shadow-[0_20px_50px_rgba(37,99,235,0.45)]
                "
              >
                Get Free Consultation

                <ArrowRight
                  size={18}
                  className="
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/10
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white/20
                  hover:shadow-xl
                "
              >
                View Solutions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* CONTENT SECTION */}
      {/* ========================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-200
                  bg-blue-50
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-blue-700
                "
              >
                <ShieldCheck size={16} />

                <span>
                  Custom Software • AI Solutions •
                  Automation
                </span>
              </div>

              <h2
                className="
                  mt-8
                  text-4xl
                  font-bold
                  text-slate-900
                "
              >
                Technology That Drives Business
                Growth
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                We combine software engineering,
                cloud architecture, automation and
                artificial intelligence to help
                businesses modernize operations,
                improve efficiency and scale faster.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  "Custom Software Development",
                  "AI-Powered Solutions",
                  "Business Automation",
                  "Enterprise Applications",
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

            {/* RIGHT */}

            <HeroVisual />
          </div>
        </div>
      </section>
    </>
  );
}
