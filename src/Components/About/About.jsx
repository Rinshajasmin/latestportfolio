export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen relative z-10 text-white px-4 sm:px-6 md:px-12 lg:px-24 pt-6 sm:pt-10 pb-16 sm:pb-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 min-h-[85vh]">
        {/* LEFT CONTENT */}
        <div className="space-y-6 sm:space-y-8 relative z-10 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build
            <br />
            Scalable Web Apps
            <br />
            <span className="block uppercase tracking-[0.3em] text-[#FF8C1A] text-xs sm:text-sm font-semibold my-2">
              with
            </span>
            <span className="bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Rinsha Jasmin
            </span>
          </h1>

       <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-9 max-w-2xl mx-auto lg:mx-0">
  Hi. I'm{" "}

  <span
    className="
      text-xl sm:text-2xl
      font-semibold
      bg-linear-to-r
      from-orange-500
      to-orange-300
      
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_10px_rgba(255,140,26,0.45)]
    "
  >
    MERN Stack Developer
  </span>

  , passionate about building performant, modern and user-centric web
  applications using React.js, Node.js, Express.js and MongoDB.
</p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 sm:pt-4">
            <button className="bg-linear-to-r from-orange-500 to-orange-400 hover:scale-105 transition duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-[0_0_40px_rgba(255,140,26,0.3)]">
              View My Work →
            </button>

            <a
              href="./ResumeRinshaJasmin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-[#FF8C1A] hover:text-[#FF8C1A] transition duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-gray-300"
            >
              View My Resume →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center lg:justify-end lg:pr-12 xl:pr-24 order-1 lg:order-2">
          {/* PURPLE GLOW */}
          <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] bg-purple-700/30 blur-[100px] sm:blur-[120px] rounded-full"></div>

          {/* IMAGE */}
          <div className="relative z-10 w-full flex justify-center">
            <img
              src="/rinsha1.png"
              alt="developer"
              className="w-[260px] sm:w-[360px] md:w-[460px] lg:w-[520px] xl:w-[620px] object-contain relative z-10 opacity-95 drop-shadow-[0_0_60px_rgba(128,0,255,0.35)]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 98%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 98%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* TECH STACK BAR */}
      <div className="mt-16 sm:mt-24 border border-[#1c1833] bg-[#0c0b1d]/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-6 sm:py-10">
        <p className="text-center text-gray-500 tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase mb-6 sm:mb-10">
          Technologies & Tools I Work With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-10 text-gray-300 text-sm sm:text-base lg:text-lg font-medium">
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>JavaScript</span>
          <span>Tailwind CSS</span>
          <span>Git & GitHub</span>
        </div>
      </div>
    </section>
  );
}
