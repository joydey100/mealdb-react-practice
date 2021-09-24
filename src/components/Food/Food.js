import React from "react";
import "./Food.css";

const Food = (props) => {
  // Destructuring meal info
  const { strMeal, strCategory, strMealThumb } = props.food;

  return (
    <div className="col-md-4">
      <div className="card h-100 p-3 shadow">
        <img src={strMealThumb} className="img-fluid mb-3" alt="thumbnail" />
        <h5 className="mb-3"> {strMeal} </h5>
        <p className="mb-3 text-secondary"> Category: {strCategory} </p>
        <button
          className="btn btn-danger"
          onClick={() => props.handleClick(props.food)}
        >
          Show Meal
        </button>
      </div>
    </div>
  );
};

export default Food;
