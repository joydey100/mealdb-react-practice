import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section container py-4">
      <div className="row g-4">
        <div className="col-md-6 d-flex align-items-center">
          <div className="banner-info">
            <h2 className="banner-title mb-3">
              Try Our Tasty <span className="text-danger"> Meal</span>
            </h2>
            <p className="text-secondary">
              We are Really Focusd to make healthy food. we always make sure
              about the hygiene. In our restaurant, you will found different
              types of meal, e.g- launch, dinner, fast-food, sweets etc.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner-img">
            <img
              src="https://media.istockphoto.com/vectors/buddha-bowl-with-avocado-salmon-cucumber-eggs-chickpeas-rucola-top-vector-id1158019625?k=20&m=1158019625&s=612x612&w=0&h=h6i3hGScEwSx5oBKhRfuADOwwImcStDhYuGppbUUzME="
              alt="banner"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
