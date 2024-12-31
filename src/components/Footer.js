import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column footer-icons">
            <a
              href="https://www.facebook.com/NetflixIN/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://www.instagram.com/Netflix_IN/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://x.com/netflixindia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
          </div>
          <div className="footer-column"></div>
          <div className="footer-column"></div>
          <div className="footer-column"></div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <a href="/">Audio Descriptio</a>
            <a href="/">Investor Relations</a>
            <a href="/">Legal Notices</a>
          </div>
          <div className="footer-column">
            <a href="/">Help Center</a>
            <a href="/">Jobs</a>
            <a href="/">Cookie Preferences</a>
          </div>
          <div className="footer-column">
            <a href="/">Gift Card</a>
            <a href="/">Tearms of Use</a>
            <a href="/">Corporate Information</a>
          </div>
          <div className="footer-column">
            <a href="/">Media Center</a>
            <a href="/">Privacy</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div>
          <button className="service-code">Service Code</button>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
