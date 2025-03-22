import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactComponents.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className='contact-container'>
        <a href="mailto:kmmaheswari24@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://github.com/Maheswarikarthi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/maheswari-k-24b923236/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="tel:+9262038774" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
