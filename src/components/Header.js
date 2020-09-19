import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

import Logo from '../assets/images/logo-brand.png';

class Header extends Component {
  conditionalRender() {
    switch (this.props.auth) {
      case null:
        return 'Still logging in ...';
      case false:
        return (
          <a href="/auth/google">
            <span>Sign in with Google</span>
          </a>
        );
      default:
        return [
          <Stripe key="1" />,
          <Link
            key="2"
            to="#"
            className="btn waves-effect waves-light #2196f3 blue"
          >
            Credits : <span> {this.props.auth.credits} </span>
          </Link>,
          <a
            key="3"
            href="/api/logout"
            className="btn waves-effect waves-light #ff1744 red accent-3"
          >
            Logout
            <i className="material-icons right">arrow_forward</i>
          </a>,
        ];
      // <div>
      // <Link
      //   to="/credits/add"
      //   className="btn waves-effect waves-light #2196f3 blue"
      // >
      //   Add Credits
      //   <i className="material-icons right">add</i>
      // </Link>

      // </div>
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper ">
          <Link to={this.props.user ? '/surveys' : '/'} className="brand-logo">
            WoroApps
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{this.conditionalRender()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
