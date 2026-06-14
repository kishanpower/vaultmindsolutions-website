import {
  Target,
  Eye,
  ShieldCheck,
  Rocket,
  Users,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "We build software with security integrated from day one.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Leveraging modern technologies and AI to create business value.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Long-term partnerships focused on measurable outcomes.",
  },
];

export default function About() {
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
            ABOUT VAULTMIND
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-bold
              md:text-6xl
            "
          >
            Building Intelligent
            <span className="block text-cyan-400">
              Technology Solutions
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
            VaultMind Solutions helps businesses
            transform ideas into scalable software,
            automation platforms and AI-powered
            digital products.
          </p>

        </div>
      </section>

      {/* Story */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                Our Story
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                VaultMind Solutions was founded
                with a vision to bridge the gap
                between business challenges and
                modern technology solutions.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Our team combines software
                engineering, cloud technologies,
                AI expertise and business strategy
                to create solutions that help
                organizations grow faster and
                operate more efficiently.
              </p>
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
                Secure Ideas.
                Intelligent Solutions.
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                We believe technology should
                simplify complexity, improve
                productivity and create measurable
                business impact.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <Target
                size={40}
                className="text-blue-600"
              />

              <h3 className="mt-6 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To help businesses unlock growth
                through secure, scalable and
                intelligent technology solutions.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <Eye
                size={40}
                className="text-cyan-600"
              />

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To become a trusted technology
                partner for businesses embracing
                digital transformation and AI.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Core Values
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                  "
                >
                  <Icon
                    size={40}
                    className="text-blue-600"
                  />

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Trust Section */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Why Businesses Trust Us
          </h2>

          <div className="mt-12 space-y-4">

            {[
              "Custom software expertise",
              "AI & automation capabilities",
              "Enterprise-grade security",
              "Transparent delivery process",
              "Long-term support & maintenance",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                "
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
      </section>
    </>
  );
}
