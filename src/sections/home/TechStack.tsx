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
];

export default function TechStack() {
  return (
    <section className="py-20">
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
            Technologies We Use
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
          "
          >
            Modern Technology Stack
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
            We build secure, scalable and
            future-ready solutions using proven
            technologies and modern frameworks.
          </p>
        </div>

        <div
          className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-4
        "
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-6
              py-4
              text-sm
              font-semibold
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-300
              hover:shadow-lg
            "
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
