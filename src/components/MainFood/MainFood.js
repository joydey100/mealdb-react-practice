import React, { useEffect, useState } from "react";
import DetailFood from "../DetailFood/DetailFood";
import Food from "../Food/Food";

const MainFood = () => {
  // Important States
  const [Foods, setFoods] = useState([]);
  const [displayFood, setDisplayFood] = useState([]);
  const [detailFood, setDetailFood] = useState([]);
  const [searchFood, setSearchFood] = useState("");

  //   UseEffect for first loading data
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  //   usEffect for after searching Data
  useEffect(() => {
    if (searchFood.length) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=` + searchFood
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.meals === null) {
            return;
          }
          setDisplayFood(data.meals);
        });
    }
  }, [searchFood]);

  //  handle Click Function
  const handleClick = (food) => {
    setDetailFood(food);
  };

  //   Searching Function
  const handleSearch = (e) => {
    setSearchFood(e.target.value);
  };

  //   Condtion checking utilities
  const searchElement = displayFood.map((food) => (
    <Food key={food.idMeal} food={food} handleClick={handleClick} />
  ));

  const element = Foods.map((food) => (
    <Food key={food.idMeal} food={food} handleClick={handleClick} />
  ));

  return (
    <div className="container pt-5">
      <h2 className="text-center mt-5">
        Our <span className="text-danger">Foods </span>
      </h2>

      <div className="search-field mt-4">
        <input
          type="text"
          placeholder="Search Your Meal"
          className="form-control w-50 mx-auto border border-secondary border-2"
          onChange={handleSearch}
        />
      </div>

      <div className="food-container row g-4 mt-4">
        <div className="col-md-9">
          <div className="row g-2">
            {displayFood.length || null ? searchElement : element}
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-1">
            <DetailFood detail={detailFood} key={detailFood.idMeal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFood;
