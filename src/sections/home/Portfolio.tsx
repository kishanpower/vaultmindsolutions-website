import {
  ArrowRight,
  Building2,
  BrainCircuit,
  Boxes,
} from "lucide-react";

const projects = [
  {
    title: "ERP Management System",
    category: "Enterprise Software",
    description:
      "A centralized ERP platform for managing operations, inventory, finance and reporting.",
    icon: Building2,
  },
  {
    title: "AI Business Automation",
    category: "Artificial Intelligence",
    description:
      "AI-powered automation workflows that reduced manual tasks and improved productivity.",
    icon: BrainCircuit,
  },
  {
    title: "Inventory Management",
    category: "Business Software",
    description:
      "Real-time inventory tracking system with analytics, reporting and stock optimization.",
    icon: Boxes,
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-50 py-24">
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
            PORTFOLIO
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
            Selected Projects &
            Success Stories
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
            Explore some of the software
            solutions, enterprise systems and
            AI-powered applications we've
            delivered for growing businesses.
          </p>
        </div>

        {/* Projects */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:border-blue-300
                  hover:shadow-2xl
                "
              >
                {/* Top Banner */}

                <div
                  className="
                    relative
                    flex
                    h-56
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-blue-600
                    via-cyan-500
                    to-blue-700
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                >
                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-3xl
                      bg-white/15
                      backdrop-blur
                    "
                  >
                    <Icon
                      size={48}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Content */}

                <div className="p-8">

                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-wide
                      text-blue-600
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-slate-600
                    "
                  >
                    {project.description}
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
                    View Case Study

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
              </div>
            );
          })}
        </div>

          {/* Trust Section */}

          <div
            className="
              mt-20
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-10
              text-center
              shadow-sm
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-slate-900
              "
            >
              Delivering Business Value Through
              Technology
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-3xl
                leading-8
                text-slate-600
              "
            >
              Every solution we build focuses on
              measurable outcomes, operational
              efficiency, scalability and long-term
              business growth. Our goal is not just
              software delivery, but creating real
              business impact through technology.
            </p>
          </div>


        {/* Bottom CTA */}

        <div
          className="
            mt-20
            text-center
          "
        >
          <button
            className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            View Full Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}
