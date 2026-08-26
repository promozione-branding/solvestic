const skinConcerns = [
  {
    title: "Sun Tan",
    description: "Restore your skin's natural glow",
    image: "9.webp",
  },
  {
    title: "Melasma",
    description: "Target uneven pigmentation",
    image: "melasma.webp",
  },
  {
    title: "Post Acne Marks",
    description: "Fade marks & improve texture",
    image: "11.webp",
  },
  {
    title: "Uneven Skin Tone",
    description: "Bring back deep hydration",
    image: "12.webp",
  },
];

const SkinConcerns = () => {
  return (
    <section className="relative overflow-hidden bg-[#fffaff] px-5 py-6 md:py-13">
      
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
            Skin concerns
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            What does your{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              skin
            </span>{" "}
            need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Every skin has a story. Discover targeted care designed to bring
            out your healthiest, most radiant skin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skinConcerns.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(80,40,100,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(80,40,100,0.15)] `}
            >
              {/* Image */}
              <div className="relative h-[330px] overflow-hidden sm:h-[360px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-xs font-bold text-purple-600 backdrop-blur-md">
                  0{index + 1}
                </span>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-[220px] text-sm text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom action */}
             
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-purple-600">
            Find the right care
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkinConcerns;