import React from 'react';
import { useSpring } from 'react-spring';
import './Contact.css';

const Contact = () => {


  return (
    <div className="contact-container">
      <p className="education-heading">CONTACTS</p>
      <div className="education-content">
        <section className="education-section">
          <div className="educationline-container">
            <div className="educationvertical-line"></div>
            <div className="educationline-texts">
              <p className="educationtop-phrase">Let's Get in Touch</p>
              <p className="educationknow-more">Contact Me</p>
            </div>
          </div>
          <div className="contact-details-message">
            <div className="contact-details">
              <div className="detail-row">
                <div className="detail-item">
                  <div className="icon-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <p>pavithradeevi@gmail.com</p>
                </div>
                <div className="detail-item">
                  <div className="icon-circle">
                    <i className="fas fa-phone"></i>
                  </div>
                  <p>+420 793980803</p>
                </div>
                <div className="detail-item">
                  <div className="icon-circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>378/8,Krakovska, Olomouc-77900</p>
                </div>
                <div className="social-icons">
    <a
      href="https://www.linkedin.com/in/pavithra-v-148533263/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <div className="socialicon-circle">
        <i className="fab fa-linkedin"></i>
      </div>
    </a>
    <a
      href="https://github.com/pavithradeevi"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <div className="socialicon-circle">
        <i className="fab fa-github"></i>
      </div>
    </a>
  </div>
              </div>
            </div>
           
            
            {/* <div className="message-form">
  <p className="form-heading">Leave Me a Message</p>
  <form>
    <div className="form-group-row">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Your Phone Number" required />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
    </div>
    <button type="submit" className="submit-button">Submit</button>
  </form>
</div> */}

          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
