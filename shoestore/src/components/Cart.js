import React from "react";
import {useCart} from "react-use-cart";

const Cart=()=> 
{
  // methods and properties from usecart
const
{
    items,
    isEmpty,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
}=useCart();

// buy function
const handleBuy=()=>  
{
    alert("Thanyou for shopping with us you order will delivered soon.....");
};

// displays a message when cart is empty
if(isEmpty)return <h1 className="text-center">Cart is empty</h1>;
return(
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5 className="cart-main-title">
            Orderd Items
          </h5>
          <table className="table cart-items-table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name of Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item,index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.img}
                      className="cart-item-image"
                      alt={item.title}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      onClick={()=>
                        updateItemQuantity(item.id,item.quantity-1)
                      }
                      className="btn btn-light btn-sm"
                    >
                      -
                    </button>
                    <button
                      onClick={()=>
                        updateItemQuantity(item.id,item.quantity+1)
                      }
                      className="btn btn-light btn-sm ms-3"
                    >
                      +
                    </button>
                    <button
                      onClick={()=>removeItem(item.id)}
                      className="btn btn-danger btn-sm ms-3"
                    >
                        Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h2>Total price: ${cartTotal}</h2>
            <div className="cart-buttons-container">
              <button onClick={()=>emptyCart()} className="btn clear-cart-button">
                Clear Cart Items
              </button>
              <button onClick={handleBuy} className="btn order-cart-button">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
