import React from "react";
import { SkillsInfo } from "../../constants";


const Skills = () => (
  <section
    id="skills"
    className="pt-12 pb-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom scroll-mt-16"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className=" w-24 h-1 mx-auto mt-2 rounded-full
    bg-linear-to-r
    from-orange-600
    via-orange-500
    to-[#FF8C1A]

    shadow-[0_0_12px_rgba(255,140,26,0.5)]"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
         className="
  bg-white/5
  backdrop-blur-sm
  px-6 sm:px-10
  py-8 sm:py-6
  mb-10
  w-full sm:w-[48%]
  rounded-2xl
  border border-white/10

  shadow-[0_0_20px_rgba(255,140,26,0.08)]

  hover:shadow-[0_0_35px_rgba(255,140,26,0.35)]
  hover:border-orange-400/40
  hover:-translate-y-2

  transition-all
  duration-500
">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          
           
          
            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-2
    min-w-[120px]
    px-4 py-3
    border border-white/10
    rounded-full

    bg-white/5
    backdrop-blur-sm

    hover:border-orange-400/40
    hover:shadow-[0_0_20px_rgba(255,140,26,0.25)]

    transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm
  text-gray-300
  whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          
        </div>
      ))}
    </div>
  </section>
);

export default Skills;