import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

const Details = () => {
  const { id } = useParams();
  const product = data.products.find((product) => product.id === parseInt(id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.img} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <p><strong>Category:</strong> {product.category}</p>
          <p>{product.description}</p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;