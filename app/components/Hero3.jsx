import React from "react";

export default function Hero3() {
  return (
    <section className="relative w-full overflow-hidden">
      <picture>
        {/* Mobile Image */}
        <source
          media="(max-width: 767px)"
          srcSet="/2.webp"
        />

        {/* Desktop Image */}
        <img
          src="/newbannew.webp"
          alt="Hero"
          className="block h-[300px] w-full object-cover object-center md:h-[500px]"
        />
      </picture>
    </section>
  );
}