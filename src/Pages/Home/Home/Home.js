import React from 'react';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FAQS from '../FAQS/FAQS';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <FAQS></FAQS>
    </div>
  );
};

export default Home;