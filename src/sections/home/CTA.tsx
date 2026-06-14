import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-blue-700
            via-blue-600
            to-cyan-500
            px-10
            py-24
            text-center
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.35)]
          "
        >

          {/* Background Effects */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2.5
              text-sm
              font-medium
              backdrop-blur-md
            "
          >
            <Sparkles size={16} />
            Start Your Digital Transformation
          </div>

          {/* Heading */}

          <h2
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              md:text-5xl
              xl:text-6xl
            "
          >
            Ready To Build
            The Next Big Solution?
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-blue-100
            "
          >
            Whether you need custom software,
            AI-powered automation, enterprise
            applications or digital transformation
            consulting, our team is ready to help
            bring your vision to life.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <button
              className="
                group
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

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/25
                bg-white/10
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/20
                hover:-translate-y-1
              "
            >
              <PhoneCall size={18} />
              Book Strategy Call
            </button>
          </div>

          {/* Trust Text */}

          <p
            className="
              mt-10
              text-sm
              font-medium
              tracking-wide
              text-blue-100
            "
          >
            Trusted by startups, growing businesses
            and enterprise teams.
          </p>

        </div>
      </div>
    </section>
  );
}
