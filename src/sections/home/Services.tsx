import {
  BrainCircuit,
  Cog,
  MonitorSmartphone,
  Layers3,
} from "lucide-react";

const services = [
  {
    icon: Layers3,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to solve real business challenges.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "AI-powered applications, automation and intelligent business systems.",
  },
  {
    icon: Cog,
    title: "Business Automation",
    description:
      "Streamline repetitive processes and improve operational efficiency.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web & Desktop Applications",
    description:
      "Modern responsive web platforms and powerful desktop software.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
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
            Our Services
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
          "
          >
            Solutions Built For Growth
          </h2>

          <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            text-lg
            text-slate-600
          "
          >
            From custom software development
            to AI-powered automation, we help
            businesses transform ideas into
            scalable digital solutions.
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
                hover:-translate-y-2
                hover:border-blue-300
                hover:shadow-xl
              "
              >
                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-50
                  text-blue-600
                "
                >
                  <Icon size={28} />
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
