// Base import
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Redux import
import { connect } from 'react-redux';
import * as actions from './actions';
// Component import
import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

import SurveyNew from './components/surveys/SurveyNew';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
