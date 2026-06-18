import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Manufacturing Group",
    text: "VaultMind transformed our operations with a custom ERP solution. Productivity increased significantly and reporting became effortless.",
  },
  {
    name: "Ankit Verma",
    company: "Retail Business",
    text: "The inventory management platform helped us reduce stock errors and gain real-time visibility across locations.",
  },
  {
    name: "Sarah Johnson",
    company: "Technology Startup",
    text: "Outstanding team. Their AI automation solutions saved us countless hours every week and improved decision making.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span
            className="
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
            CLIENT TESTIMONIALS
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
            Trusted By Businesses
            Worldwide
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
            We build long-term partnerships through
            innovation, transparency and measurable
            business results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                relative
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <Quote
                size={42}
                className="
                  absolute
                  right-6
                  top-6
                  text-blue-100
                "
              />

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="
                      fill-yellow-400
                      text-yellow-400
                    "
                  />
                ))}
              </div>

              <p
                className="
                  mt-6
                  leading-8
                  text-slate-600
                "
              >
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4
                  className="
                    text-lg
                    font-bold
                    text-slate-900
                  "
                >
                  {item.name}
                </h4>

                <p className="text-slate-500">
                  {item.company}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
