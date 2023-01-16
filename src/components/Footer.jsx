import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/profile.php?id=100031835604365"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a href="https://www.instagram.com/koras_view/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
    </div>
  )
}

export default Footer
