import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    //displays the details of items added to cart and the quantity
    <div className="cartItem">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs {price}</p>
        <div className="countHandler">
          {/* this button reduces quantity count of product by 1 and if qty = 1 then it will remove item from the cart */}
          <button
            className="btn btn-outline-danger"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          {/* this textbox displays the current quantity count of the item */}
          <input
            className=" countTxt"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          {/* this button increases quantity count of product by 1 and if qty = 1 then it will remove item from the cart */}
          <button
            className="btn btn-outline-primary"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
