import {
  BrainCircuit,
  Building2,
  Bot,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Business Systems",
    description:
      "Intelligent applications, AI assistants and automation systems that improve efficiency and decision making.",
  },
  {
    icon: Building2,
    title: "Enterprise Platforms",
    description:
      "ERP, CRM and centralized business management systems built for growing organizations.",
  },
  {
    icon: Bot,
    title: "Business Automation",
    description:
      "Workflow automation solutions that reduce manual work and increase operational productivity.",
  },
  {
    icon: Database,
    title: "Data & Analytics Solutions",
    description:
      "Dashboards, reporting platforms and business intelligence systems that turn data into insights.",
  },
];

export default function Solutions() {
  return (
    <>
      {/* Hero */}

      <section className="bg-slate-950 pt-40 pb-28 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
          >
            BUSINESS SOLUTIONS
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-bold
              md:text-6xl
            "
          >
            Technology Solutions
            <span className="block text-cyan-400">
              Designed For Growth
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            We design and develop modern digital
            solutions that help businesses automate
            operations, improve efficiency and
            accelerate growth through technology.
          </p>

        </div>
      </section>

      {/* Solutions Grid */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2
              className="
                text-4xl
                font-bold
                text-slate-900
              "
            >
              Solutions We Deliver
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-3xl
                text-lg
                text-slate-600
              "
            >
              Purpose-built software solutions
              designed to solve complex business
              challenges and create measurable value.
            </p>
          </div>

          <div
            className="
              mt-16
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
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
                    {solution.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-slate-600
                    "
                  >
                    {solution.description}
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
                    Explore Solution

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

        </div>
      </section>

      {/* Benefits Section */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <h2
                className="
                  text-4xl
                  font-bold
                  text-slate-900
                "
              >
                Built Around Your Business Goals
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Every solution is designed with
                scalability, security and business
                outcomes in mind.
              </p>

              <div className="mt-10 space-y-4">

                {[
                  "Scalable architecture",
                  "Cloud-ready deployment",
                  "Enterprise-grade security",
                  "AI-powered automation",
                  "Business process optimization",
                  "Long-term support & maintenance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            <div
              className="
                rounded-[32px]
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                p-10
                text-white
              "
            >
              <h3 className="text-3xl font-bold">
                Future-Ready Digital Platforms
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Our solutions are designed not only
                for today's business needs but also
                for future growth, innovation and
                digital transformation initiatives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div
            className="
              rounded-[40px]
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-10
              py-20
              text-center
              text-white
            "
          >
            <h2 className="text-5xl font-bold">
              Ready To Transform Your Business?
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-xl
                text-blue-100
              "
            >
              Let's build software solutions that
              help your business scale faster and
              operate smarter.
            </p>

            <button
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-8
                py-4
                font-semibold
                text-blue-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Discuss Your Project

              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
