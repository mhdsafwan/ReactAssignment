import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
// import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const checkOut = () => {
    if (isAuthenticated === true) {
      navigate("/checkout");
    } else {
      confirmAlert({
        title: "Not LoggedIn!!!",
        message: " Do yo want to continue as guest ???",
        buttons: [
          {
            label: "Yes",
            onClick: () => navigate("/checkout"), //Redirecting to checkout page
          },
          {
            label: "Login",
            onClick: () => loginWithRedirect(), // redirecting login page
          },
        ],
      });
    }
  };

  return (
    <div className="cart">
      <div className="title">
        <h1>Your Cart Items</h1>
      </div>
      {/* mapping the products ans matching into useState where product is added into cart */}
      <div className="">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        //available whn cart is not empty
        <div className="checkoutbtn">
          <p>Subtotal: Rs. {totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => checkOut()}>Checkout</button>
        </div>
      ) : (
        //available when cart is empty
        <div className="checkoutbtn">
          <h1>Cart is Empty</h1>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};
