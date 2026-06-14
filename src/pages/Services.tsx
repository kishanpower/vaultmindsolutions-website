import {
  BrainCircuit,
  Cog,
  MonitorSmartphone,
  Layers3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Layers3,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed around your business processes and growth goals.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "AI-powered systems, assistants and automation tools that improve efficiency and decision making.",
  },
  {
    icon: Cog,
    title: "Business Automation",
    description:
      "Streamline workflows, reduce manual effort and accelerate operations with automation.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web & Desktop Applications",
    description:
      "Modern web platforms and enterprise desktop software built for reliability and scale.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-40 text-white">
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
            OUR SERVICES
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-bold
              md:text-6xl
            "
          >
            Software Solutions
            <span className="block text-cyan-400">
              Built For Business Growth
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
            We help startups, growing businesses
            and enterprises build secure software,
            intelligent automation systems and
            AI-powered solutions that deliver
            measurable business results.
          </p>
        </div>
      </section>

      {/* Services Grid */}

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
              What We Offer
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
              Comprehensive software development,
              AI and automation services designed
              to help businesses scale efficiently.
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
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
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
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-slate-600
                    "
                  >
                    {service.description}
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
        </div>
      </section>

      {/* Why Businesses Work With Us */}

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
                Why Businesses Choose
                VaultMind Solutions
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Our approach combines technology,
                strategy and business understanding
                to build solutions that create
                long-term value.
              </p>

              <div className="mt-10 space-y-4">

                {[
                  "Custom-built solutions",
                  "AI & automation expertise",
                  "Enterprise-grade security",
                  "Scalable architecture",
                  "Long-term support",
                  "Transparent delivery process",
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
                Technology That Delivers Results
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                From software engineering and
                cloud architecture to AI-powered
                automation, we help businesses
                transform ideas into scalable
                digital products.
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
              Ready To Build Something Great?
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
              Let's discuss your software,
              automation or AI project.
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
              Get Free Consultation

              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
