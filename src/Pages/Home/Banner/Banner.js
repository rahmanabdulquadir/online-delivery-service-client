import React from 'react';
import image from '../../../images/undraw_on_the_way_re_swjt.svg'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={image} className=" w-full max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Welcome To The Fastest <br /> Online Delivery Service App!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem  quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;