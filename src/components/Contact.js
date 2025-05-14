import React from 'react';
import facebook from '../images/contact/facebook.png';
import linkedin from '../images/contact/linkedin.png';
import github from '../images/contact/github.png';

function Contact() {
  return (
    <div className="d-flex gap-3 mt-3 justify-content-center align-items-center flex-wrap">
      <a href="https://www.facebook.com/marienneerissesandoval/" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook Contact Account" style={{ height: '45px' }} />
      </a>
      <a href="https://www.linkedin.com/in/marygraceisonza/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn Contact Account" style={{ height: '45px' }} />
      </a>
      <a href="https://github.com/marrymebbz" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub Contact Account" style={{ height: '45px' }} />
      </a>
    </div>
  );
}

export default Contact;
