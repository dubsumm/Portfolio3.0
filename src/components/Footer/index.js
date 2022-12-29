import React from "react";

import { Foot, FooterContainer, FootLink, NavLink } from "./FooterElements";
import {} from "@fortawesome/fontawesome-svg-core"
import {} from "@fortawesome/free-solid-svg-icons"
import {} from "@fortawesome/free-regular-svg-icons"



const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <div className=" w-1/4 text-left text-s">
            Made with ❤️ by Will Summerlin ©
            </div>
          <div className="w-1/2 text-center">
            <FootLink href="https://github.com/dubsumm" target="_blank" rel='noreferrer'>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github"/>
            </FootLink>
            <FootLink href="https://www.linkedin.com/in/willsummerlin2022/" target="_blank" rel='noreferrer'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkedIn' />
            </FootLink>
            
            </div>
            <div className="w-1/4 text-right">
              <p className="text-s">My Anthem</p>
        <a href="https://www.youtube.com/watch?v=L93-7vRfxNs" target="_blank" rel='noreferrer' >▶️</a>
        </div>
      </FooterContainer>
    </Foot>
  );
};

export default Footer;
