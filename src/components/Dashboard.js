import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../assets/images/email-vector.jpg';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="dashboard-content col s12">
        <img src={Image} alt="email-pic" />

        <div className="text-content">Woro-worokan surveymu sekarang</div>
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
