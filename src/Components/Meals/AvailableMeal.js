import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem.js";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    URL:"https://www.geeksforgeeks.org/"
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    URL:"https://www.geeksforgeeks.org/"
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    URL:"https://www.geeksforgeeks.org/"
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Card className="classes.meals">
      <ul>{mealsList}</ul>
    </Card>
  );
};
export default AvailableMeals;
