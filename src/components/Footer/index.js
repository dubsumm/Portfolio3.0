import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Foot} from './FooterElements'

const Footer = () => {
  return (
    <div>
      
      <Foot>
      <h1 className="text-light">Footer</h1>
      <FontAwesomeIcon icon="fa-brands fa-linkedin" className="h-20 fill-white"/>
      </Foot>
    </div>
  );
};

export default Footer;
