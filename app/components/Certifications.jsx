import {
  FaShieldAlt,
  FaIndustry,
  FaCheckCircle,
  FaFlask,
} from "react-icons/fa";

const certifications = [
  {
    title: "ISO",
    subtitle: "Certified",
    description: "Quality Management",
    icon: FaShieldAlt,
  },
  {
    title: "GMP",
    subtitle: "Certified",
    description: "Good Manufacturing",
    icon: FaIndustry,
  },
  {
    title: "FDA",
    subtitle: "Approved",
    description: "Safety Standards",
    icon: FaCheckCircle,
  },
  {
    title: "Sulphate",
    subtitle: "Free",
    description: "Clean Formulation",
    icon: FaFlask,
  },
];

export default function Certifications() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-6  md:py-12">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-gray-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-gray-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-6 text-center sm:mb-14">
        

          <h2 className="mt-2 text-2xl font-bold uppercase tracking-[0.12em] text-gray-900 sm:text-3xl md:text-4xl">
            Our Certifications
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-800" />
            <span className="h-[1px] w-8 bg-gray-300" />
          </div>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:grid-cols-4">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group relative flex min-h-[210px] flex-col items-center justify-center
                  px-4 py-8 text-center transition-all duration-500
                  hover:bg-gray-50
                  ${index % 2 !== 1 ? "border-r border-gray-200" : ""}
                  ${index < 2 ? "border-b border-gray-200 sm:border-b-0" : ""}
                  ${index === 1 ? "sm:border-r sm:border-gray-200" : ""}
                  ${index === 3 ? "sm:border-r-0" : ""}
                `}
              >
                {/* Icon Circle */}
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gray-900 group-hover:shadow-md sm:h-[72px] sm:w-[72px]">
                  {/* Rotating Ring */}
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-gray-200 transition-all duration-700 group-hover:rotate-180 group-hover:border-gray-400" />

                  <Icon className="relative z-10 text-2xl text-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:text-gray-900 sm:text-[28px]" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-900 sm:text-lg">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {item.subtitle}
                </span>

                {/* Description */}
                <p className="mt-2 text-[10px] text-gray-400 sm:text-lg">
                  {item.description}
                </p>

                {/* Bottom hover line */}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gray-900 transition-all duration-500 group-hover:w-12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
