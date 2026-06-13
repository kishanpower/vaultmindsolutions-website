import { motion } from "framer-motion";
import {
  Brain,
  MonitorSmartphone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative hidden lg:flex items-center justify-center">
      {/* Main Dashboard */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
        relative
        w-full
        max-w-xl
        rounded-3xl
        border
        border-slate-200
        bg-white/90
        p-8
        shadow-2xl
        backdrop-blur
      "
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900">
              VaultMind Dashboard
            </h3>

            <p className="text-sm text-slate-500">
              Secure • Scalable • Intelligent
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Online
          </span>
        </div>

        <div className="space-y-4">
          {[
            "Custom Software Development",
            "AI-Powered Solutions",
            "Business Automation",
            "Enterprise Applications",
          ].map((item) => (
            <div
              key={item}
              className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-slate-100
              p-4
            "
            >
              <span className="font-medium text-slate-700">
                {item}
              </span>

              <CheckCircle2
                size={18}
                className="text-green-600"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Card 1 */}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -left-8
        top-20
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-xl
      "
      >
        <Brain className="mb-2 text-blue-600" />
        <p className="font-medium">AI Solutions</p>
      </motion.div>

      {/* Floating Card 2 */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-0
        top-6
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-xl
      "
      >
        <ShieldCheck className="mb-2 text-green-600" />
        <p className="font-medium">Secure Systems</p>
      </motion.div>

      {/* Floating Card 3 */}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-10
        right-5
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-xl
      "
      >
        <MonitorSmartphone className="mb-2 text-cyan-600" />
        <p className="font-medium">
          Web & Desktop Apps
        </p>
      </motion.div>
    </div>
  );
}
