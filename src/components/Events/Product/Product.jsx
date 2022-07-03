import React from "react";
import "./Product.css";
const Product = ({ img, title, link, id }) => {
  return (
    <>
      <a className="p" href={link} target="_blank" rel="noreferrer">
        <div className="project-info">
          <span className="p-title">{title}</span>
        </div>

        <img src={img} alt="" className="event-img" />
      </a>
    </>
  );
};

export default Product;
