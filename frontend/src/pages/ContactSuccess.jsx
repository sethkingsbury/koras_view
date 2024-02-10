import { useNavigate } from "react-router-dom"

function ContactSuccess() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  }

  return (
    <div className="container">
        <h1>Thanks for getting in touch! We'll reply to you as soon as possible</h1>
        <button onClick={toHome}>
            Back to Home
        </button>
    </div>
  )
}

export default ContactSuccess
