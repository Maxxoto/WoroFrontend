import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../assets/images/landing-vector.jpg';

const Landing = () => {
  return (
    <div className="row">
      <div className="dashboard-content col s12">
        <img src={Image} alt="email-pic" />

        <div className="text-content">
          Buat survey jadi mudah hanya dengan <b>WoroApps</b>
        </div>
        <Link
          to="/surveys"
          className="waves-effect waves-light red btn"
          style={{ marginTop: '10px' }}
        >
          <i className="material-icons right">send</i>
          Buat survey sekarang
        </Link>
      </div>
    </div>
  );
};

export default Landing;
