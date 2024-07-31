import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

const Details = () => {
const { id } = useParams();
const product = data.products.find((product) => product.id === parseInt(id));
return (
    <div className="container details-container">
      <div className="row details-row">
        <div className="col-md-6 details-image-col">
          <img src={product.img} className="img-fluid details-img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6 details-info-col">
          <h2 className="details-title">{product.title}</h2>
          <h3 className="details-price">${product.price}</h3>
          <p><strong>Category:</strong> {product.category}</p>
          <p>{product.description}</p>
          <button className="btn details-add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Details;
