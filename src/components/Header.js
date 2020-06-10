import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper ">
          <a href="#" className="brand-logo">
            WoroApps
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/auth/google">
                <span>Sign in with Google</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
