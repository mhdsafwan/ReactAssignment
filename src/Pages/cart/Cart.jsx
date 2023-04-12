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
  const { user, isAuthenticated, isLoading } = useAuth0();

  const checkOut = () => {
    if (isAuthenticated === true) {
      navigate("/checkout");
    } else {
      // confirm("Your not Logged in!!! \n want to continue as guest ???");
      // navigate("/checkout");
      confirmAlert({
        title: "Not LoggedIn!!!",
        message: " Want to continue as guest ???",
        buttons: [
          {
            label: "Checkout",
            onClick: () => navigate("/checkout"), //I want to redirect from here
          },
          {
            label: "LogIn",
            onClick: () => loginWithRedirect(),
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
      <div className="">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) return <CartItem data={product} />;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkoutbtn">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => checkOut()}>Checkout</button>
          {/* <button onClick={() => navigate("/checkout")}>GuestCheckout</button> */}
        </div>
      ) : (
        <div className="checkoutbtn">
          <h1>Cart is Empty</h1>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};
