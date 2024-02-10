import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import '../styles/contact.css';

function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toSuccess = () => {
    navigate('/contact-success');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`https://test.korasview.com/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      toSuccess();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (

    <div className="container">
      {loading && <Loading/>}
      <h1>Contact</h1>
      <p className="blurb">Get in touch to arrange a booking directly with us. Let us know when you would like to stay and we will reply as soon as possible.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;
