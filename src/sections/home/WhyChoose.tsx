import {
  ShieldCheck,
  Clock3,
  Rocket,
  Headset,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Secure By Design",
    description:
      "Security best practices are integrated into every phase of development, ensuring robust and reliable solutions.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description:
      "Applications and systems designed to grow seamlessly with your business and future requirements.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Transparent project planning, clear milestones and predictable delivery schedules.",
  },
  {
    icon: Headset,
    title: "Long-Term Support",
    description:
      "Continuous maintenance, monitoring and enhancement services after deployment.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">
          <span
            className="
              inline-flex
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
            WHY CHOOSE VAULTMIND
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-slate-900
              md:text-5xl
            "
          >
            Built For Reliability,
            Security & Growth
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            We combine technology expertise,
            business understanding and modern
            development practices to deliver
            software solutions that create
            measurable value.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:border-blue-300
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500
                    text-white
                    shadow-lg
                  "
                >
                  <Icon size={30} />
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-600
                  "
                >
                  {reason.description}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:gap-3
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}

        <div
          className="
            mt-20
            rounded-3xl
            border
            border-slate-200
            bg-slate-50
            p-8
            text-center
          "
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Your Technology Partner For The Long Term
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-slate-600
            "
          >
            From planning and development to deployment
            and support, VaultMind Solutions helps
            businesses build technology foundations
            that enable sustainable growth.
          </p>
        </div>

      </div>
    </section>
  );
}
