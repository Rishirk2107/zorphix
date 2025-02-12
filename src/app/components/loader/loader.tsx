

import React from 'react';
import './loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={"/video/loader1.mp4"} type="video/mp4" />
          Your browser is not supported!
        </video>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
