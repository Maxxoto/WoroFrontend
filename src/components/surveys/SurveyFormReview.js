import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import FIELDS from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const renderField = () => {
    //  Gak perlu lodash CRA terbaru sudah ada lodash

    return FIELDS.map(({ label, name }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <input type="text" value={formValues[name]} disabled />
        </div>
      );
    });
  };

  return (
    <div>
      <h2 align="center" className="grey-text">
        Review Your Survey Form
      </h2>
      {renderField()}

      {/*{this.renderField()}*/}
      <button className="red btn-flat white-text" onClick={onCancel}>
        Edit Survey
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="teal btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
