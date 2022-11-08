import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])
  useEffect( () => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
      <div className='text-center mb-12'>
        <p className='text-2xl font-bold '>Services</p>
        <h2 className='text-4xl font font-semibold'>Types Of Services</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores eaque adipisci magnam fuga. Ipsam voluptas autem ad labore doloribus quis.</p>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-24'>
        {/* <h1>services: {services.length}</h1> */}
        {
          services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;