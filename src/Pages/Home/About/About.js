import React from "react";
import image2 from "../../../images/images.png";

const About = () => {
  return (
    <div>
      <div className="hero   bg-base-200">
        <div className="hero-content mx-auto flex-col lg:flex-row">
          <img src={image2} className="max-w-sm rounded-lg shadow-2xl mr-24" />
          <div>
            <h1 className="text-3xl font-bold">About Services</h1>
            <h1 className="text-2xl font-semibold">
              Trust in The Fastest & Most reliable Delivery Service
            </h1>
            <p className="py-6">
              I have been delivering your necessarries on this area for 3 years. i started this delivery service in 2019. In the period of covid 19. I tried to make peoples life easier by delivering their needs. People of this area also trust my service a lot. {" "}
              <br /> Its been now more than 3 years now i am providing any kind of delivery service. The journey was very interesting. <br />{" "}
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
