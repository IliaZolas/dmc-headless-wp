import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={logo} alt="The DMC" />
        </div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Digital Marketing Collaboration</h1>
          <p>We bring quality digital services to businesses worldwide</p>
          <a href="#services" className="btn-primary">Learn More</a>
        </div>
      </section>
      <section id="services" className="services">
          <h2>Our Services</h2>
        <div className="services-container">
          <div className="service">
            <h3>Create and Manage Your Site</h3>
            <p>Every business needs a spot on the web for their customers to find them. With a website, your business will have access to thousands of visitors and valuable analytics that aid in decision making.</p>
            <a href="#contact" className="btn-secondary">Get Started</a>
          </div>
          <div className="service">
            <h3>Develop &amp; Coordinate Social Media Campaigns</h3>
            <p>Your brand's social platforms are populated daily with relevant and engaging content, giving your customers a fresh look at your brand and easy ways for them to reach out to you and engage with your offers.</p>
            <a href="#contact" className="btn-secondary">Get Started</a>
          </div>
          <div className="service">
            <h3>Conduct Email Marketing Campaigns</h3>
            <p>People who become subscribers are interested in what you offer and react quickly to compelling promotions and incentives. We send your subscribers attractive emails and use automation to aid them in their customer journey.</p>
            <a href="#contact" className="btn-secondary">Get Started</a>
          </div>
          <div className="service">
            <h3>Advertise Your Brand Online</h3>
            <p>We create and manage pay per click campaigns over Google's search and display network as well as Facebook, Instagram, Twitter, and LinkedIn.</p>
            <a href="#contact" className="btn-secondary">Get Started</a>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are a team of digital marketing experts dedicated to bringing quality digital services to businesses worldwide.</p>
        <p>Our mission is to help businesses of all sizes succeed in the digital space by providing top-notch services and innovative solutions.</p>
        <a href="#contact" className="btn-primary contact-button">Contact Us</a>
      </section>
      <section id="contact" className="contact">
      <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-input" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-input" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="form-textarea"></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </section>
      <footer className="footer">
  <div className="footer__logo">
    {/* <img src={logo} alt="The DMC Logo" /> */}
  </div>
  <div className="footer__links">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
  <div className="footer__social">
    <ul>
      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
    </ul>
  </div>
</footer>

    </div>
  );
}

export default App;
