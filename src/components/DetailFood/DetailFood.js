import React from "react";

const DetailFood = (props) => {
  // Destructuring Meals info
  const { strMealThumb, strMeal, strArea, strInstructions, strCategory } =
    props.detail;

  // Condition checking for showing title text
  const area = !(strArea === undefined) && `Area : ` + strArea;
  const category = !(strCategory === undefined) && `Category : ` + strCategory;
  const desc =
    !(strInstructions === undefined) &&
    `Description : ` + strInstructions.slice(0, 250) + `...`;

  return (
    <div>
      <h4 className="text-center mb-4 text-secondary">Your Food</h4>
      <img src={strMealThumb} className="img-fluid" alt="" />
      <h5 className="text-center my-3"> {strMeal} </h5>
      <p className="mb-3 text-secondary"> {category} </p>
      <p className="mb-3 text-secondary">{area}</p>
      <p className="mb-3 text-secondary">{desc}</p>
    </div>
  );
};

export default DetailFood;
