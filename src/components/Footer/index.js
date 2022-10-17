import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="foot grid  grid-cols-1 sm:grid-cols-3 ">

      <div className=" text-left my-auto ml-5 ">
        <p className="footp my-auto ml-10">
          Made with ❤️ by Will Summerlin ©
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 h-10/12 m-auto">
        <div className=" card" class="icon">
          <a href="https://github.com/dubsumm" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="github"
            />
          </a>
        </div>

        <div class="icon">
          <a
            href="https://www.linkedin.com/in/willsummerlin2022/"
            target="_blank"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" />
          </a>
        </div>

        <div className="icon">
          <Link to="/contact">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
          </Link>
        </div>
       
      </div>
      <div className=" m-auto text-right md:mr-7"> For the truly cultured <a href="https://www.youtube.com/watch?v=L93-7vRfxNs" target="_blank">▶️</a></div>
    </div>
  );
};

export default Footer;
