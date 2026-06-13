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
      {/* Background Effects */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}

          <div>
            {/* Badge */}

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
                px-5
                py-2.5
                text-sm
                font-medium
                text-blue-700
              "
            >
              <ShieldCheck size={16} />

              <span>
                Custom Software • AI Solutions • Automation
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                mt-8
                text-5xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-slate-900
                md:text-6xl
                xl:text-7xl
              "
            >
              Custom Software,

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-blue-700
                  bg-clip-text
                  text-transparent
                "
              >
                AI & Automation
              </span>

              Solutions
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
                lg:text-xl
              "
            >
              We help businesses streamline operations,
              improve productivity and accelerate growth
              through custom software development,
              intelligent automation and AI-powered
              solutions.
            </motion.p>

            {/* CTA Buttons */}

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
                  from-[#1E6BFF]
                  to-[#11B5FF]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                Get Free Consultation

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
                  px-8
                  py-4
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:text-blue-600
                  hover:shadow-lg
                "
              >
                View Solutions
              </button>
            </motion.div>

            {/* Highlights */}

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

          {/* Right Side */}

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
