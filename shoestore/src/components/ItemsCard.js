import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const ItemsCard = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 home-card">
      <div className="card p-0 overflow-hidden h-100 shadow item-card-hover">
        <Link to={`/details/${props.item.id}`}>
          <img src={props.img} className="card-img-top img-fluid home-card-img-top" alt={props.title} />
        </Link>
        <div className="card-body text-center home-card-body">
          <h5 className="card-title item-card-title">{props.title}</h5>
          <h5 className="card-price item-card-price">${props.price}</h5>
          <button className="btn add-to-cart-button" onClick={() => addItem(props.item)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
