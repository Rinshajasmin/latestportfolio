import React from "react";

const projects = [
  {
    title: "e-commerce platform",
    image: "/projects/chronara.png",

    description:
"Built Chronara, an e-commerce platform for watches using server-side rendering for improved performance and SEO. Implemented secure authentication and session management using bcrypt. Integrated Razorpay payment gateway with retry mechanisms to improve transaction reliability. Deployed the application on AWS EC2 with Nginx and custom domain configuration. Developed an admin dashboard with Chart.js for sales and analytics tracking. Implemented PDF invoice generation and location-based delivery charge calculation. Optimized MongoDB queries and caching strategies to reduce load times and improve overall application performance."
,
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    live: "https://chrona.site/",
    github: "https://github.com/Rinshajasmin/Chronara.git",
  },

  {
    title: "User Management System",
    image: "/projects/Usermanagement.png",

    description:
"Built a full-stack User Management System using the MERN Stack with secure authentication and role-based access control. Implemented JWT-based authentication, bcrypt password hashing, and protected routes for secure access management. Developed complete CRUD functionalities for user creation, updates, deletion, and profile management. Integrated image upload functionality using Multer for profile picture management. Created an admin panel with user search and management features for efficient administration. Designed responsive frontend interfaces with React and managed backend APIs using Express.js and Node.js with MongoDB for data storage."
,
    tech: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    github: "https://github.com/Rinshajasmin/ReduxCrudApp",
  },
];

const Projects = () => {
  return (
    <section
      id="works"
      className="
        pt-12 sm:pt-16 md:pt-20
        pb-20
        px-5 sm:px-10 md:px-[8vw] lg:px-[12vw]
        font-sans
        
      "
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold
            tracking-wide
             text-white

            bg-linear-to-r
            from-orange-600
            via-orange-500
            to-[#FF8C1A]

            bg-clip-text
            text-transparent

            drop-shadow-[0_0_12px_rgba(255,140,26,0.35)]
          "
        >
          Projects
        </h2>

        {/* Underline */}
        <div
          className="
            w-24 sm:w-28
            h-1
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

      {/* Projects Grid */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-white/5
              backdrop-blur-sm

              border border-white/10
              rounded-3xl

              overflow-hidden

              hover:border-orange-400/40
              hover:shadow-[0_0_35px_rgba(255,140,26,0.25)]
              hover:-translate-y-2

              transition-all duration-500
            "
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[220px]
    object-contain
                  rounded-2xl
                "
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-6">
             

              {/* Title */}
              <h3
                className="
                  text-xl sm:text-2xl
                  font-bold
                  text-white
                  mb-4
                "
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-gray-300
                  text-sm sm:text-base
                  leading-7
                "
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-2
                      rounded-full

                      bg-orange-500/10
                      border border-orange-400/20

                      text-orange-300
                      text-sm

                      backdrop-blur-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 flex-wrap">

  {/* Live Demo Button */}
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-5 py-3
        rounded-xl

        bg-linear-to-r
        from-orange-600
        via-orange-500
        to-[#FF8C1A]

        text-white
        font-medium

        hover:scale-105
        hover:shadow-[0_0_20px_rgba(255,140,26,0.45)]

        transition-all duration-300
      "
    >
      Live Demo
    </a>
  )}

  {/* Github Button */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-5 py-3
      rounded-xl

      border border-white/10
      bg-white/5

      text-gray-300
      font-medium

      hover:border-orange-400/40
      hover:text-white
      hover:shadow-[0_0_20px_rgba(255,140,26,0.25)]

      transition-all duration-300
    "
  >
    GitHub
  </a>
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;