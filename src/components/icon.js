import React from "react";
import"./icon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function icon() {
  return (
    <div className="icn">
      <div className="icons">
      <FontAwesomeIcon icon={faSquareTwitter} size="lg"  className="space"  />
      <FontAwesomeIcon icon={faSquareFacebook} size="lg"   className="space"  />
      <FontAwesomeIcon icon={faSquareInstagram} size="lg"  className="space" />
      <FontAwesomeIcon icon={faLinkedin } size="lg" className="space"  />
      <FontAwesomeIcon icon={faSquareGithub} size="lg"  className="space" />
      </div>


    </div>
    
  )
}
export default icon;