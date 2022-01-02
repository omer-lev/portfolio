import './Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="Footer">
            <p>COPYRIGHT © 2022. ALL RIGHTS RESERVED</p>

            <div className="icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faGooglePlusG} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faWhatsapp} />
            </div>
        </div>
    )
}

export default Footer;
