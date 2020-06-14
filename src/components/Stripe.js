import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        name="WoroApps"
        description="$1 for 1 email Credits"
        amount={100}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn waves-effect waves-light #ff1744 #2196f3 blue">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Stripe);
