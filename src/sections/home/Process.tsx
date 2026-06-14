import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Understanding business goals, requirements and challenges.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description:
      "Creating a clear roadmap, timelines and project strategy.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Crafting modern UI/UX experiences and system architecture.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building scalable software using modern technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    description:
      "Ensuring security, performance and reliability.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Launching and supporting solutions in production.",
  },
];

export default function Process() {
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
            OUR PROCESS
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
            From Idea To Deployment
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
            A structured and transparent workflow
            designed to deliver secure, scalable
            and high-quality solutions on time.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-10
              hidden
              xl:block
              h-[2px]
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-blue-600
            "
          />

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-6
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="
                    group
                    relative
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    text-center
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-3
                    hover:border-blue-300
                    hover:shadow-2xl
                  "
                >
                  {/* Number */}

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      text-sm
                      font-bold
                      text-slate-300
                    "
                  >
                    0{index + 1}
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-blue-600
                      to-cyan-500
                      text-white
                      shadow-lg
                    "
                  >
                    <Icon size={34} />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}

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
            Transparent Process. Predictable Results.
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-slate-600
            "
          >
            Every project follows a proven delivery
            framework that minimizes risk, improves
            communication and ensures successful outcomes.
          </p>
        </div>

      </div>
    </section>
  );
}
