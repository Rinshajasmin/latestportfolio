import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        pt-12 sm:pt-16
        pb-20
        px-[12vw] md:px-[7vw] lg:px-[20vw]
        font-sans
        scroll-mt-16
      "
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Experience
        </h2>

        {/* Orange Gradient Underline */}
        <div
          className="
            w-28 h-1
            mx-auto mt-4
            rounded-full
            bg-linear-to-r
            from-orange-600
            via-orange-500
            to-[#FF8C1A]

            shadow-[0_0_15px_rgba(255,140,26,0.6)]
          "
        ></div>
      </div>

      {/* Experience Card */}
      <div
        className="
          bg-white/5
          backdrop-blur-sm
          border border-white/10
          rounded-3xl

          p-6 sm:p-8

          hover:border-orange-400/40
          hover:shadow-[0_0_35px_rgba(255,140,26,0.25)]
          hover:-translate-y-1

          transition-all duration-500
        "
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          {/* Left */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Brototype - Full Stack Development
            </h3>

            <p
              className="
                mt-1
                text-sm sm:text-base
                font-medium

                bg-linear-to-r
                from-orange-600
                via-orange-500
                to-[#FF8C1A]

                bg-clip-text
                text-transparent
              "
            >
              MERN Stack Development
            </p>
          </div>

          {/* Right */}
          <div className="text-gray-400 text-sm sm:text-base">
            Aug 2024 – Present
          </div>
        </div>

        {/* Location */}
        <p className="mt-5 text-gray-400">
          📍 Kochi, Kerala
        </p>

        {/* Points */}
        <ul className="mt-6 space-y-3 text-gray-300">
          <li>
    • Gained hands-on experience in building full stack web applications using the MERN stack.
  </li>

  <li>
    • Developed responsive and user-friendly interfaces following modern web development practices.
  </li>

  <li>
    • Worked on real-world projects involving REST APIs, authentication, and scalable application architecture.
  </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;