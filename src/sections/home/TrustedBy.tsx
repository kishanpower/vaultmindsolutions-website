const companies = [
  "Microsoft",
  "Google",
  "Amazon",
  "OpenAI",
  "Meta",
  "Oracle",
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p
            className="
              text-sm
              font-semibold
              tracking-[0.25em]
              text-slate-500
              uppercase
            "
          >
            Technologies & Platforms We Work With
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            gap-6
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
          "
        >
          {companies.map((company) => (
            <div
              key={company}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                py-5
                text-center
                font-semibold
                text-slate-600
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:text-blue-600
                hover:shadow-lg
              "
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
