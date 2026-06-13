import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Cloud,
  MonitorSmartphone,
  Bot,
  Database,
} from "lucide-react";

const items = [
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    position: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    position: "top-24 left-0",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    position: "top-24 right-0",
  },
  {
    icon: MonitorSmartphone,
    title: "Web & Desktop",
    position: "bottom-24 left-0",
  },
  {
    icon: Bot,
    title: "Automation",
    position: "bottom-24 right-0",
  },
  {
    icon: Database,
    title: "Enterprise Apps",
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
];

export default function HeroVisual() {
  return (
    <div className="relative hidden h-[600px] lg:block">
      <div className="absolute inset-0 flex items-center justify-center">

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
          flex
          h-44
          w-44
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-cyan-500
          text-center
          shadow-2xl
        "
        >
          <div>
            <h3 className="text-2xl font-bold text-white">
              VaultMind
            </h3>

            <p className="text-sm text-blue-100">
              Solutions
            </p>
          </div>
        </motion.div>

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className={`
                absolute
                ${item.position}
              `}
            >
              <div
                className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-4
                shadow-xl
              "
              >
                <Icon
                  size={26}
                  className="mb-2 text-blue-600"
                />

                <p className="font-semibold text-slate-700">
                  {item.title}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
