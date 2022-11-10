import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import Services from '../../Services/Services';
import Services3 from '../../Services/Services3';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FAQS from '../FAQS/FAQS';

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <About></About>
      {/* <Services></Services> */}
      <Services3></Services3>
      <FAQS></FAQS>
    </div>
  );
};

export default Home;