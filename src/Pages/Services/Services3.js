import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services3 = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-14">
      <div className="text-center mb-8">
        <h2 className="text-4xl font font-semibold">Type Of Services</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          eaque adipisci magnam fuga. Ipsam voluptas autem ad labore doloribus
          quis.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-24">
        {/* <h1>services: {services.length}</h1> */}
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="w-1/12 mx-auto">
      <Link to={'/services'}>
        <button className="btn btn-primary flex justify-end mt-10 px-7">
          See More
        </button>
      </Link>
      </div>
      
    </div>
  );
};

export default Services3;
