import React from "react";
import "./Service.css";
import service1 from "../../images/service-1.jpg";
import service2 from "../../images/service-2.jpg";
import service3 from "../../images/service-3.jpg";

const Service = () => {
  return (
    <main className="Service" style={{ backgroundColor: "#AFAFAF" }}>
      <div className="row align-items-center">
        <div className="col-6">
          <img src={service1} alt="" className="image-1" />
        </div>
        <div className="col-6 p-5">
          <h3 className="service-text text-end">
            Read Amazing Folios <br /> And Learn New Things
          </h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6 p-5">
          <h3 className="service-text">
            Spread Your Reach By <br/> Uploading Interesting <br/> Folios And Connect To<br/>
            Millions Of Readers Directly
          </h3>
        </div>
        <div className="col-6">
          <img src={service2} alt="" className="image-2" />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6">
          <img src={service3} alt="" className="image-1" />
        </div>
        <div className="col-6 p-5">
          <h3 className="service-text text-end">
          Easily Share And <br/> Discuss Folios With <br/> Your Friends
          </h3>
        </div>
      </div>
      <button className="custom-button">Start Experiencing</button>
    </main>
  );
};

export default Service;
