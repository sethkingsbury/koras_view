import { useNavigate } from "react-router-dom";
import "../styles/ContactSuccess.css";

function ContactSuccess() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <div className="contact-success-container">
      <h1>
        Thanks for getting in touch! We'll reply to you as soon as possible
      </h1>
      <button className="button filled" onClick={toHome}>
        Back to Home
      </button>
    </div>
  );
}

export default ContactSuccess;
