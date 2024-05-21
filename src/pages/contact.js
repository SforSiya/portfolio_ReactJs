/*import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact; */


import React from 'react';
import '../styles/contact.css';
import insta from '../assets/insta.jpg';
import email from '../assets/email.jpg';
import phone from '../assets/phone.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
       <h1>Contact Us</h1>
      <div className="bar">
        <a href="https://www.instagram.com/swaira_ansar/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Icon 1" className="icon 1" />
        </a>
        <span>Instagram</span>
      </div>
      <div className="bar">
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inboxhttps://www.bing.com/search?q=mail&cvid=3a0e36976a894a83b4ccb50aee31d19a&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg80gEIMTQzMWowajGoAgCwAgA&FORM=ANAB01&PC=U531" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="Icon 2" className="icon 2" />
        </a>
        <span>Email</span>
      </div>
      <div className="bar">
        <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
          <img src={phone} alt="Icon 3" className="icon 3" />
        </a>
        <span>Phone</span>
      </div>
    </div>
  );
};

export default Contact;

  

