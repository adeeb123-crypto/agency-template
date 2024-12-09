"use client";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import {
  IoThumbsUpOutline,
  IoTrendingUpOutline,
  IoShieldCheckmarkOutline,
  IoServerOutline,
} from "react-icons/io5";
import {
  IoSparklesOutline,
  IoLayersOutline,
  IoMegaphoneOutline,
  IoRocketOutline,
  IoWifiOutline,
} from "react-icons/io5";
import {
  IoPaperPlaneOutline,
  IoMailOutline,
  IoGlobeOutline,
  IoCallOutline,
  IoTimeOutline,
  IoLocationOutline,
} from "react-icons/io5";
import {
  IoCalendarOutline,
  IoPersonOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import React, { useState } from "react";

import img from '../../public/framer-hero-img.avif'
import {MarqueeDemoVertical} from "../components/ui/MarqueeDemoVertical"

export default function Home() {
  // const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  // const header = document.querySelector("[data-header]");

  // if (navToggleBtn && header) {
  //   navToggleBtn.addEventListener("click", function () {
  //     header.classList.toggle("active");
  //   });
  // } else {
  //   console.error("Navigation toggle button or header not found!");
  // }

  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  return (
    <>
      <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon" />

      <header className={`header ${isActive ? "active" : ""}`} data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src="https://framerusercontent.com/images/GByoaMmZxwN1tfXrfWiEq7AevWc.png" alt="Landio logo" />
          </a>

          <button
            className="menu-toggle-btn"
            data-nav-toggle-btn
            onClick={toggleNavbar}
          >
            <IoIosMenu size={30} />
          </button>

          <nav className="navbar font-font-copyLocalOne">
            <ul className="navbar-list">
              <li>
                <a href="#hero" className="navbar-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="navbar-link">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="navbar-link">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#blog" className="navbar-link">
                  Blog
                </a>
              </li>

              <li>
                <a href="#contact" className="navbar-link">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* <div className="header-actions">
              <a href="#" className="header-action-link">
                Log in
              </a>

              <a href="#" className="header-action-link">
                Register
              </a>
            </div> */}
          </nav>
        </div>
      </header>

      <main>
        <article>
          <section className="hero" id="hero">
            <div className="video-background">
              <video autoPlay loop muted>
                <source
                  src="https://darker-supply.s3.us-east-005.backblazeb2.com/Flowing+Neon+Curve+Lines_1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              </div>
              <div className="container hero-container">
                <div className="hero-content">
                  <h1
                    className="h1 hero-title font-copyLocalThree"
                    style={{ fontSize: "72px", fontWeight: 500 }}
                  >
                    Manage your sales and <br />
                    analytics in{" "}
                    <span
                      style={{ fontWeight: 400, display: "contents" }}
                      className="font-copyLocalOne"
                    >
                      one place
                    </span>
                  </h1>
                  <div className="hero-bottom">
                  <p className="hero-text font-copyLocalThree">
                    Track custom events, increase form submissions, optimise<br/>
                    conversion rates and optimise your sales flow with Scalable.
                  </p>
                  {/* <form action="" className="hero-form"> */}
                    {/* <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Your Email"
                      className="email-field"
                    /> */}
                    <button type="submit" className="btn btn-primary font-copyLocalThree">
                      Subscribe
                    </button>
                  {/* </form> */}
                  <div className="hero-second-img-wrapper">
                    <img className="hero-second-img" src="/framer-hero-img.avif" alt="Hero Image" />
                  </div>
                  </div>
                </div>
              </div>
          </section>

          <div className="section-divider">
            <div className="glow-effect"></div>
          </div>

          <section className="about">
            <div className="container">
              <div className="about-content">
              <h1
                    className="h1 hero-title font-copyLocalThree"
                    style={{ fontSize: "52px", fontWeight: 500 }}
                  >
                    Track your sales and <br />
                    analytics in{" "}
                    <span
                      style={{ fontWeight: 400, display: "contents" }}
                      className="font-copyLocalOne"
                    >
                      one place
                    </span>
                  </h1>
                {/* <div className="about-icon">
                  <IoCubeOutline size={32} />
                </div> */}

                {/* <h2 className="h2 about-title">Why Choose Us ?</h2>

                <p className="about-text">
                  Nam libero tempore cum soluta as nobis est eligendi optio
                  cumque nihile impedite quo minus id quod maxime.
                </p> */}

                {/* <button className="btn btn-outline">Learn More</button> */}
              </div>

              <ul className="about-list">
                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <IoThumbsUpOutline size={24} />
                    </div>

                    <h3 className="h3 card-title">Esay To Use</h3>

                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <IoTrendingUpOutline size={24} />
                    </div>

                    <h3 className="h3 card-title">Grow Your Revenue</h3>

                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <IoShieldCheckmarkOutline size={24} />
                    </div>

                    <h3 className="h3 card-title">Analytics Security</h3>

                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <IoServerOutline size={24} />
                    </div>

                    <h3 className="h3 card-title">Data Privacy</h3>

                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="features" id="features">
            <div className="container">
              {/* <h2 className="h2 section-title">Awesome Features</h2> */}

              {/* <p className="section-text"> */}
              <div className="features-heading">
              <h1
                    className="section-text h1 hero-title font-copyLocalFour"
                    style={{ fontSize: "52px", fontWeight: 550, marginBottom: "-0.5rem" }}
                  >
                    Scale faster{" "}
                    <span
                      style={{ fontWeight: 400, display: "contents" }}
                      className="font-copyLocalOne"
                    >
                      than ever
                    </span>
                    
                  </h1>
                  <p className="hero-text font-copyLocalThree">
              Scalable isn't another fancy piece of software.<br/> It's engineered to make a difference.
                    
                  </p>
              {/* </p> */}

                  </div>

                  <MarqueeDemoVertical/>
              {/* <div className="features-wrapper">
                <figure className="features-banner">
                  <img src="./hero-banner.png" alt="illustration art" />
                </figure>

                <div className="features-content">
                  <p className="features-content-subtitle">
                    <IoSparklesOutline size={24} />

                    <span>CREATIVE FEATURES</span>
                  </p>

                  <h3 className="features-content-title">
                    Build <strong>community</strong> &{" "}
                    <strong>conversion</strong> with our suite of{" "}
                    <strong>social tool</strong>
                  </h3>

                  <p className="features-content-text">
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    a necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint molestiae non recusandae itaque.
                  </p>

                  <ul className="features-list">
                    <li className="features-list-item">
                      <IoLayersOutline size={24} />

                      <p>Donec pede justo fringilla vel nec.</p>
                    </li>

                    <li className="features-list-item">
                      <IoMegaphoneOutline size={24} />

                      <p>Cras ultricies mi eu turpis hendrerit fringilla.</p>
                    </li>
                  </ul>

                  <div className="btn-group">
                    <button className="btn btn-primary">Read More</button>

                    <button className="btn btn-secondary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="features-wrapper">
                <figure className="features-banner">
                  <img src="./features-img-2.png" alt="illustration art" />
                </figure>

                <div className="features-content">
                  <p className="features-content-subtitle">
                    <IoSparklesOutline size={24} />

                    <span>CREATIVE FEATURES</span>
                  </p>

                  <h3 className="features-content-title">
                    We do the work you <strong>stay focused</strong> on{" "}
                    <strong>your customers.</strong>
                  </h3>

                  <p className="features-content-text">
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    a necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint molestiae non recusandae itaque.
                  </p>

                  <ul className="features-list">
                    <li className="features-list-item">
                      <IoRocketOutline size={24} />

                      <p>Donec pede justo fringilla vel nec.</p>
                    </li>

                    <li className="features-list-item">
                      <IoWifiOutline size={24} />

                      <p>Cras ultricies mi eu turpis hendrerit fringilla.</p>
                    </li>
                  </ul>

                  <div className="btn-group">
                    <button className="btn btn-primary">Read More</button>

                    <button className="btn btn-secondary">Buy Now</button>
                  </div>
                </div>
              </div> */}
            </div>
          </section>

          <section className="blog" id="blog">
            <div className="container">
              <h2 className="h2 section-title">Latest News</h2>

              <p className="section-text">
                Et harum quidem rerum facilis est et expedita distinctio nam
                libero tempore cum soluta nobis eligendi cumque.
              </p>

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="blog-banner">
                      <img
                        src="./blog-banner-1.jpg"
                        alt="Best Traveling Place"
                      />
                    </figure>

                    <div className="blog-meta">
                      <span>
                        <IoCalendarOutline size={24} />

                        <time>april 10 2021</time>
                      </span>

                      <span>
                        <IoPersonOutline size={24} />

                        <p>admin</p>
                      </span>
                    </div>

                    <h3 className="blog-title">Best Traveling Place</h3>

                    <p className="blog-text">
                      Integer ante arcu accumsan a consectetuer eget posuere
                      mauris praesent adipiscing phasellus ullamcorper ipsum
                      rutrum punc.
                    </p>

                    <a href="#" className="blog-link-btn">
                      <span>Learn More</span>

                      <IoChevronForwardOutline size={24} />
                    </a>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="blog-banner">
                      <img
                        src="./blog-banner-2.jpg"
                        alt="Private Meeting Room"
                      />
                    </figure>

                    <div className="blog-meta">
                      <span>
                        <IoCalendarOutline size={24} />

                        <time>april 10 2021</time>
                      </span>

                      <span>
                        <IoPersonOutline size={24} />

                        <p>admin</p>
                      </span>
                    </div>

                    <h3 className="blog-title">Private Meeting Room</h3>

                    <p className="blog-text">
                      Integer ante arcu accumsan a consectetuer eget posuere
                      mauris praesent adipiscing phasellus ullamcorper ipsum
                      rutrum punc.
                    </p>

                    <a href="#" className="blog-link-btn">
                      <span>Learn More</span>

                      <IoChevronForwardOutline size={24} />
                    </a>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="blog-banner">
                      <img
                        src="./blog-banner-3.jpg"
                        alt="The Best Business Ideas"
                      />
                    </figure>

                    <div className="blog-meta">
                      <span>
                        <IoChevronForwardOutline size={24} />

                        <time>april 10 2021</time>
                      </span>

                      <span>
                        <IoPersonOutline size={24} />

                        <p>admin</p>
                      </span>
                    </div>

                    <h3 className="blog-title">The Best Business Ideas</h3>

                    <p className="blog-text">
                      Integer ante arcu accumsan a consectetuer eget posuere
                      mauris praesent adipiscing phasellus ullamcorper ipsum
                      rutrum punc.
                    </p>

                    <a href="#" className="blog-link-btn">
                      <span>Learn More</span>

                      <IoChevronForwardOutline size={24} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="container">
              <h2 className="h2 section-title">Contact Us</h2>

              <p className="section-text">
                Et harum quidem rerum facilis est et expedita distinctio nam
                libero tempore cum soluta nobis eligendi cumque.
              </p>

              <div className="contact-wrapper">
                <form action="" className="contact-form">
                  <div className="wrapper-flex">
                    <div className="input-wrapper">
                      <label>Name*</label>

                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Enter Your Name"
                        className="input-field"
                      />
                    </div>

                    <div className="input-wrapper">
                      <label>Email*</label>

                      <input
                        type="text"
                        name="email"
                        id="email"
                        required
                        placeholder="Enter Your Email"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <label>Message*</label>

                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Type Your Message"
                    className="input-field"
                  ></textarea>

                  <button type="submit" className="btn btn-primary">
                    <span>Send Message</span>

                    <IoPaperPlaneOutline size={24} />
                  </button>
                </form>

                <ul className="contact-list">
                  <li>
                    <a
                      href="mailto:support@website.com"
                      className="contact-link"
                    >
                      <IoMailOutline size={24} />

                      <span>: support@website.com</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="contact-link">
                      <IoGlobeOutline size={24} />

                      <span>: www.website.com</span>
                    </a>
                  </li>

                  <li>
                    <a href="tel:+0011234567890" className="contact-link">
                      <IoCallOutline size={24} />

                      <span>: (+001) 123 456 7890</span>
                    </a>
                  </li>

                  <li>
                    <div className="contact-link">
                      <IoTimeOutline size={24} />

                      <span>: 9:00 AM - 6:00 PM</span>
                    </div>
                  </li>

                  <li>
                    <a href="#" className="contact-link">
                      <IoLocationOutline size={24} />

                      <address>
                        : 1644 Deer Ridge Drive Rochelle Park, NJ 07662
                      </address>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="./logo-footer.svg" alt="Landio logo" />
              </a>

              <p className="footer-text">
                Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum
                ante ipsum primis in faucibus ultrices posuere cubilia.
              </p>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <IoLogoFacebook size={30} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IoLogoTwitter size={30} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IoLogoInstagram size={30} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IoLogoLinkedin size={30} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">ABOUT US</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Works
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Strategy
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Releases
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Press
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Mission
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">CUSTOMERS</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Tranding
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Popular
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Customers
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">SUPPORT</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Developers
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Support
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Customer Service
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Get Started
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="">codewithsadee</a>. All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
