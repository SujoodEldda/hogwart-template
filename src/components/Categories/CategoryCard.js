import React from "react";
import "./CategoryList.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ categoryData }) => {
  const { name, description, imageUrl } = categoryData;
  return (
    <div
      className="card category-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Link to={`/wiki/${name}`}>{name}</Link>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
