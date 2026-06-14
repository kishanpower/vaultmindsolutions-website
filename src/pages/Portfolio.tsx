import {
  ArrowRight,
  Building2,
  BrainCircuit,
  Boxes,
  BarChart3,
  Globe,
  ShieldCheck,
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
      "AI-powered automation workflows that reduced manual effort and increased productivity.",
    icon: BrainCircuit,
  },
  {
    title: "Inventory Management Platform",
    category: "Business Software",
    description:
      "Real-time inventory tracking with analytics, reporting and stock optimization.",
    icon: Boxes,
  },
  {
    title: "Business Intelligence Dashboard",
    category: "Analytics",
    description:
      "Interactive dashboards providing actionable business insights and reporting.",
    icon: BarChart3,
  },
  {
    title: "Corporate Web Platform",
    category: "Web Development",
    description:
      "Modern responsive website focused on performance, SEO and lead generation.",
    icon: Globe,
  },
  {
    title: "Secure Internal Portal",
    category: "Enterprise Security",
    description:
      "Role-based secure portal for internal operations and team collaboration.",
    icon: ShieldCheck,
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white">

      {/* Hero Section */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-40 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-sm
              backdrop-blur-md
            "
          >
            OUR PORTFOLIO
          </span>

          <h1
            className="
              mx-auto
              mt-8
              max-w-5xl
              text-5xl
              font-bold
              leading-tight
              md:text-6xl
            "
          >
            Projects That Drive
            Real Business Results
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Explore a selection of software
            platforms, enterprise systems and
            AI-powered solutions designed to help
            organizations grow, automate and innovate.
          </p>

        </div>
      </section>

      {/* Portfolio Grid */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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
                      h-56
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-blue-600
                      via-cyan-500
                      to-blue-700
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

        </div>
      </section>

      {/* Bottom CTA */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Have A Project In Mind?
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              text-slate-600
            "
          >
            Let's discuss how VaultMind Solutions
            can help turn your ideas into scalable,
            secure and intelligent software products.
          </p>

          <button
            className="
              mt-10
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Start Your Project
          </button>

        </div>
      </section>

    </div>
  );
}
