import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

class Header extends Component {
  componentDidUpdate(prevState) {
    if (prevState.auth !== this.props.auth) {
      this.conditionalRender();
    }
  }

  conditionalRender() {
    switch (this.props.auth) {
      case null:
        return 'Still logging in ...';
      case false:
        return (
          <a
            href={
              process.env.NODE_ENV === 'production'
                ? 'https://woro-api.herokuapp.com/auth/google'
                : '/auth/google'
            }
          >
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
            href={
              process.env.NODE_ENV === 'production'
                ? 'https://woro-api.herokuapp.com/api/logout'
                : '/api/logout'
            }
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
