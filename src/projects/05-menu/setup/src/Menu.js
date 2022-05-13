import React from "react";
import Categories from "./Categories";

const Menu = ({ items }) => {
  const [category, setCategory] = React.useState("all");
  return (
    <>
      <nav className="category-nav">
        <ul className="category-ul">
          <li className="category-li">
            <button
              onClick={() => {
                setCategory("all");
              }}
            >
              All
            </button>
          </li>
          <li className="category-li">
            <button
              onClick={() => {
                setCategory("breakfast");
              }}
            >
              Breakfast
            </button>
          </li>
          <li className="category-li">
            <button
              onClick={() => {
                setCategory("lunch");
              }}
            >
              Lunch
            </button>
          </li>
          <li className="category-li">
            <button
              onClick={() => {
                setCategory("shakes");
              }}
            >
              Shakes
            </button>
          </li>
        </ul>
      </nav>
      <div className="menu">
        <Categories category={category} items={items} />
      </div>
    </>
  );
};

export default Menu;
