import React from 'react';
import './Preloader.scss';
const Preloader = () => {
  return (
    <div>
      <div className='cssload-dots'>
        <div className='cssload-dot'></div>
        <div className='cssload-dot'></div>
        <div className='cssload-dot'></div>
        <div className='cssload-dot'></div>
        <div className='cssload-dot'></div>
      </div>

      <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='12'></feGaussianBlur>
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7'
              result='goo'></feColorMatrix>
            <feBlend in2='goo' in='SourceGraphic' result='mix'></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Preloader;
