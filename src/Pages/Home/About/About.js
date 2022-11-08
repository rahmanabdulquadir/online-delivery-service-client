import React from "react";
import image2 from "../../../images/images.png";

const About = () => {
  return (
    <div>
      <div className="hero   bg-base-200">
        <div className="hero-content mx-auto flex-col lg:flex-row">
          <img src={image2} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">About Services</h1>
            <h1 className="text-2xl font-semibold">
              Trust in The Fastest & Most reliable Delivery Service
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
              <br /> excepturi exercitationem quasi. In deleniti eaque <br />{" "}
              aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
