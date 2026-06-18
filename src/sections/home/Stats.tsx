import {
  Briefcase,
  Users,
  Trophy,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "150+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "50+",
    label: "Global Clients",
  },
  {
    icon: Trophy,
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Secure Development",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support Available",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span
            className="
              inline-block
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-cyan-400
            "
          >
            TRUSTED BY GROWING BUSINESSES
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Delivering Measurable Results
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-300
            "
          >
            From startups to enterprise
            organizations, VaultMind Solutions
            helps businesses accelerate digital
            transformation through custom
            software, AI solutions and business
            automation.
          </p>
        </div>

        {/* Stats Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-800/40
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-500/40
                  hover:bg-slate-800/70
                  hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                  "
                >
                  <Icon
                    size={32}
                    className="text-cyan-400"
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-5xl
                    font-bold
                    text-white
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-300
                  "
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
