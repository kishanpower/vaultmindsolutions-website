import { motion } from "framer-motion";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "AWS",
  "Azure",
  "OpenAI",
  "Next.js",
];

export default function TechStack() {
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
            TRUSTED TECHNOLOGIES
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
            Modern Technology Stack
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
            We leverage industry-leading
            technologies, cloud platforms and
            AI frameworks to build scalable,
            secure and future-ready software
            solutions for modern businesses.
          </p>
        </div>

        {/* Technology Grid */}

        <div
          className="
            mt-16
            grid
            gap-5
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-300
                hover:shadow-xl
              "
            >
              <h3
                className="
                  text-lg
                  font-semibold
                  text-slate-800
                  transition-colors
                  duration-300
                  group-hover:text-blue-600
                "
              >
                {tech}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Line */}

        <div className="mt-16 text-center">
          <p
            className="
              text-sm
              font-medium
              tracking-wider
              text-slate-500
              uppercase
            "
          >
            Building Solutions with
            Enterprise-Grade Technologies
          </p>
        </div>
      </div>
    </section>
  );
}
