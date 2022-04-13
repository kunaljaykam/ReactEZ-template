import React from "react";
import "./Header.scss";
import {logo} from "../../DrChuck";

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-name">
          <img src={logo.img} alt="Dr. Charles Severance" />
        </span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn" style={{color: "white"}}>
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a
            href="https://www.sakailms.org/"
            // using target & rel to open in new tab
            target="_blank"
            rel="noreferrer noopener"
          >
            Sakai
          </a>
        </li>

        <li>
          <a
            href="https://www.tsugi.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            tsugi
          </a>
        </li>

        <li>
          <a
            href="https://www.learnerprivacy.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Learner Privacy Podcast
          </a>
        </li>

        {/* update it later */}

        <li>
          <a
            href="https://twitter.com/drchuck/"
            target="_blank"
            rel="noreferrer noopener"
            className="twitter-button"
          >
            twitter
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
