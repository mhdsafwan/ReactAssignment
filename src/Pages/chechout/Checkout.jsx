import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import "./chkcss.css";
import { Popup } from "react-leaflet";

export const Checkout = () => {
  const { clearCart, getTotalCartAmount, removeFromWishlist } =
    useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth0();

  const confirmOrder = () => {
    alert("Are you sure to place order!!!", navigate("/"));
    // postMessage("Order places wait page will redirected" + navigate("/"));
  };

  return (
    <div className="form-control divcen">
      <div className="cnt">
        <h1>Please fill Billing and Delivery Details </h1>
      </div>

      <div className="tbl">
        <form action="">
          <table className="table">
            <tr className="rw">
              <td>Full Name: </td>
              <td>
                <input
                  type="text"
                  name="txtAdd"
                  id="txtLoc"
                  className="txtbox"
                  required
                />
              </td>
            </tr>
            <tr className="rw">
              <td>Emailid: </td>

              <td>
                {isAuthenticated ? (
                  <input
                    type="text"
                    name="txtAdd"
                    id="txtLoc"
                    className="txtbox"
                    value={user.name}
                  />
                ) : (
                  <input
                    type="text"
                    name="txtAdd"
                    id="txtLoc"
                    className="txtbox"
                    required
                  />
                )}
              </td>
            </tr>
            <tr className="rw">
              <td>Full Address: </td>
              <td>
                <textarea className="txtArea" required></textarea>
              </td>
            </tr>
            <tr className="rw">
              <td>City: </td>
              <td>
                <input
                  type="text"
                  name="txtAdd"
                  id="txtLoc"
                  className="txtbox"
                  required
                />
              </td>
            </tr>
            <tr className="rw">
              <td>Mobile Number: </td>
              <td>
                <input
                  type="number"
                  name="txtAdd"
                  id="txtLoc"
                  className="txtbox"
                  required
                />
              </td>
            </tr>
            <tr className="rw">
              <td>Total Amount: </td>
              <td>${totalAmount}</td>
            </tr>
            <tr className="rw chkbtn">
              <td>
                <button
                  type="submit"
                  onClick={() => clearCart() + confirmOrder()}
                >
                  PlaceOrder
                </button>
              </td>
              <td>
                <button onClick={() => navigate("/cart")}>BackToCart</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};
