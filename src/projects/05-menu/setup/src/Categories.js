import React from "react";

const Categories = ({ category, items }) => {
  return (
    <>
      {items
        .filter((item) => {
          if (category === 'all' || item.category === category) {
            return true;
          }
          return false;
        })
        .map((item) => {
          return (
            <section className="item" key={item.id}>
              <img src={item.img} alt="dish" className="dish-img" />
              <div className="dish">
                <div className="title-price">
                  <h3 className="dish-title">{item.title}</h3>
                  <h3 className="dish-price">{item.price}</h3>
                </div>
                <p className="dish-desc">{item.desc}</p>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default Categories;
// 
