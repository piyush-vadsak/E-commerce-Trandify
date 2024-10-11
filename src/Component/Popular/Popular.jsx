import React from "react";
import "./Popular.css";
import data_item from "../Assets/data";
import Item from "../Item/Item.jsx";

const Popular = () => {
  return (
    <div className="popular">
      <h2>POPULAR IN WOMEN</h2>
      <hr />
      <div className="popular-item">
        {data_item.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
