import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        pt-10 sm:pt-14
        pb-8
        border-t border-white/10
        mt-10
      "
    >
      {/* Social Icons */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-4 sm:gap-6
          flex-wrap
        "
      >
        {/* Github */}
        <a
          href="https://github.com/Rinshajasmin"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group

            w-14 h-14
            rounded-full

            bg-white/5
            backdrop-blur-sm

            border border-white/10

            flex items-center justify-center

            text-gray-300
            text-2xl

            hover:text-white
            hover:border-orange-400/40
            hover:shadow-[0_0_25px_rgba(255,140,26,0.45)]
            hover:-translate-y-1

            transition-all duration-300
          "
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rinshajasmin"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group

            w-14 h-14
            rounded-full

            bg-white/5
            backdrop-blur-sm

            border border-white/10

            flex items-center justify-center

            text-gray-300
            text-2xl

            hover:text-white
            hover:border-orange-400/40
            hover:shadow-[0_0_25px_rgba(255,140,26,0.45)]
            hover:-translate-y-1

            transition-all duration-300
          "
        >
          <FaLinkedinIn />
        </a>

        {/* Email */}
        <a
          href="mailto:rinshajasmin99@gmail.com"
          className="
            group

            w-14 h-14
            rounded-full

            bg-white/5
            backdrop-blur-sm

            border border-white/10

            flex items-center justify-center

            text-gray-300
            text-2xl

            hover:text-white
            hover:border-orange-400/40
            hover:shadow-[0_0_25px_rgba(255,140,26,0.45)]
            hover:-translate-y-1

            transition-all duration-300
          "
        >
          <MdEmail />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917594958308"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group

            w-14 h-14
            rounded-full

            bg-white/5
            backdrop-blur-sm

            border border-white/10

            flex items-center justify-center

            text-gray-300
            text-2xl

            hover:text-white
            hover:border-orange-400/40
            hover:shadow-[0_0_25px_rgba(255,140,26,0.45)]
            hover:-translate-y-1

            transition-all duration-300
          "
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center px-4">
        <p className="text-gray-500 text-sm sm:text-base">
          © 2026{" "}
          <span
            className="
              font-semibold

              bg-linear-to-r
              from-orange-600
              via-orange-500
              to-[#FF8C1A]

              bg-clip-text
              text-transparent
            "
          >
            Rinsha Jasmin
          </span>
          . Built with React and creativity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;