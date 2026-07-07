import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="
        pt-12 sm:pt-16 md:pt-20
        pb-16 sm:pb-20
        px-5 sm:px-10 md:px-[10vw] lg:px-[20vw]
        font-sans
        scroll-mt-10
      "
    >
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-14">
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold
            text-white
          "
        >
          Education
        </h2>

        {/* Gradient Underline */}
        <div
          className="
            w-24 sm:w-28
            h-1
            mx-auto
            mt-4
            rounded-full

            bg-linear-to-r
            from-orange-600
            via-orange-500
            to-[#FF8C1A]

            shadow-[0_0_15px_rgba(255,140,26,0.6)]
          "
        ></div>
      </div>

      {/* Education Cards */}
      <div className="space-y-6 sm:space-y-8">

        {/* Card 1 */}
        <div
          className="
            bg-white/5
            backdrop-blur-sm
            border border-white/10
            rounded-2xl sm:rounded-3xl

            p-4 sm:p-6 md:p-8

            hover:border-orange-400/40
            hover:shadow-[0_0_35px_rgba(255,140,26,0.25)]
            hover:-translate-y-1

            transition-all duration-500

            overflow-hidden
          "
        >
          <div
            className="
              flex flex-col
              md:flex-row
              md:items-start
              md:justify-between
              gap-3 md:gap-6
            "
          >
            {/* Left Content */}
            <div>
              <h3
                className="
                  text-lg sm:text-xl md:text-2xl
                  font-bold
                  text-white
                  leading-snug
                  break-words
                "
              >
              BSc.Computer Science
              </h3>

              <p
                className="
                  mt-2
                  text-sm sm:text-base
                  font-medium
                  break-words

                  bg-linear-to-r
                  from-orange-600
                  via-orange-500
                  to-[#FF8C1A]

                  bg-clip-text
                  text-transparent
                "
              >
                KAHM Unity Women's College.
              </p>
            </div>

            {/* Date */}
            <div
              className="
                text-gray-400
                text-xs sm:text-sm md:text-base

                whitespace-nowrap
                md:text-right
              "
            >
              June 2017 – March 2020
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="
            bg-white/5
            backdrop-blur-sm
            border border-white/10
            rounded-2xl sm:rounded-3xl

            p-4 sm:p-6 md:p-8

            hover:border-orange-400/40
            hover:shadow-[0_0_35px_rgba(255,140,26,0.25)]
            hover:-translate-y-1

            transition-all duration-500

            overflow-hidden
          "
        >
          <div
            className="
              flex flex-col
              md:flex-row
              md:items-start
              md:justify-between
              gap-3 md:gap-6
            "
          >
            {/* Left Content */}
            <div>
              <h3
                className="
                  text-lg sm:text-xl md:text-2xl
                  font-bold
                  text-white
                  leading-snug
                  break-words
                "
              >
                Higher Secondary – Computer Science
              </h3>

              <p
                className="
                  mt-2
                  text-sm sm:text-base
                  font-medium
                  break-words

                  bg-linear-to-r
                  from-orange-600
                  via-orange-500
                  to-[#FF8C1A]

                  bg-clip-text
                  text-transparent
                "
              >
                R M Higher Secondary School 
              </p>
            </div>

            {/* Date */}
            <div
              className="
                text-gray-400
                text-xs sm:text-sm md:text-base

                whitespace-nowrap
                md:text-right
              "
            >
              July 2015 – March 2017
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;