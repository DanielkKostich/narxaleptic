//import { Jumbotron, Container,  } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import BackgroundVideo from './BackgroundVideo';
import GoogleMaps from './GoogleMaps';

function Home() {
  return (
    <div className='home'>
            <div id="top" />
      <section>
        <header className='title'>
          <h1>Welcome to Narxoleptic Customs!</h1>
        </header>
      </section>

      <div className='parallax-container'>
        <section>
          <BackgroundVideo />
          <h1>We rebuild, modify, and increase performance on anything with an engine.</h1>
        </section>
      </div>

      <section>
        <header className='title'>
          <h2>What services do we provide?</h2>
        </header>
      </section>
      
    <section>
      <div className='services-container'>
        <ul className='services-list'>
          <li>
            <h3>Customizations:</h3>
            <p>From custom paint jobs to performance enhancements, our skilled technicians can bring your unique vision to life.</p>
          </li>
          <li>
            <h3>Restorations:</h3>
            <p>Preserve the timeless beauty of your classic car with our meticulous restoration services, combining originality with modern upgrades.</p>
          </li>
          <li>
            <h3>Fabrication:</h3>
            <p>Our experienced fabricators can craft bespoke components and perform body modifications tailored to your specifications.</p>
          </li>
          <li>
            <h3>Performance Upgrades:</h3>
            <p>Unlock the full potential of your vehicle with our performance upgrade solutions, optimizing power, handling, and tuning.</p>
          </li>
          <li>
            <h3>Maintenance and Repairs:</h3>
            <p>Ensure your vehicle operates at its best with our comprehensive maintenance services and timely repairs.</p>
          </li>
        </ul>
      </div>
    </section>

    <section>
        <header className='title'>
          <h2>Why choose us?</h2>
        </header>
      </section>

    <section>
      <div className='services-container'>
        <ul className='services-list'>
          <li>
            <h3>Expertise and Craftsmanship:</h3>
            <p>Our passionate team of professionals delivers top-quality craftsmanship with meticulous attention to detail.</p>
          </li>
          <li>
            <h3>Personalized Approach:</h3>
            <p>Preserve the timeless beauty of your classic car with our meticulous restoration services, combining originality with modern upgrades.</p>
          </li>
          <li>
            <h3>Cutting-Edge Technology:</h3>
            <p>We leverage advanced tools and diagnostic equipment to provide precise and efficient services.</p>
          </li>
          <li>
            <h3>Customer Service:</h3>
            <p>We prioritize exceptional customer service and strive to build lasting relationships with our clients.</p>
          </li>
        </ul>
      </div>
    </section>

      <div className='map'>
        <GoogleMaps />
      </div>
      
      <div className='bye'>
        <section>
          <h1>Thank you for choosing Narxoleptic. We look forward to working with you!</h1>
          <div className='links-container'>
            <NavLink to="#top" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
            <NavLink to="/gallery" className="nav-link" activeClassName="active">
              Gallery
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
            <NavLink to="/signuppage" className="nav-link" activeClassName="active">
              Sign Up
            </NavLink>
            <NavLink to="/loginpage" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </div>
        </section>
      </div>

      <section>
        <header className='title'>
          <h4></h4>
        </header>
      </section>

      <div className='footer-container'>
        <h6 className='menu'> <a href='https://drag-n-drive.com/'>Our Affiliates</a> </h6>
      </div>
    </div>
  );
}

export default Home;
