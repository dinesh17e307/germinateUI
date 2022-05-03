import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import './ShareOptionStyles.css'
export default function SocialFlow() {
  return (
    <div>
      <p className="social-container">
        <a
          href="https://www.youtube.com/" target="_blank"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/" target="_blank"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/" target="_blank"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.twitter.com"target="_blank" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://web.whatsapp.com/"target="_blank" className="whatsapp social">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </p>
    </div>
  );
}
