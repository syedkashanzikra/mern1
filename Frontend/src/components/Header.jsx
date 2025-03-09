import React from 'react';
import logo from '../../public/images/logo.png';
import locationIcon from '../../public/images/location.png';
import callIcon from '../../public/images/call.png';
import envelopeIcon from '../../public/images/envelope.png';

const Header = () => {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
            <span>Energym</span>
          </a>
          <div className="contact_nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/service">
                  <img src={locationIcon} alt="Location" />
                  <span>Location</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">
                  <img src={callIcon} alt="Call" />
                  <span>Call : +92-3140300572</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">
                  <img src={envelopeIcon} alt="Email" />
                  <span>kashan@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
