import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import "./chkcss.css";
import { Popup } from "react-leaflet";

export const Checkout = () => {
  const { clearCart, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth0();

  const confirmOrder = () => {
    alert("Are you sure to place order!!!", +navigate("/"));
    // postMessage("Order places wait page will redirected" + navigate("/"));
  };

  return (
    <div className="form-control">
      <h1>Checkout Page</h1>

      <div className="tbl">
        <table className="table">
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
                  />
              )}
            </td>
          </tr>
          <tr className="rw">
            <td>Location: </td>
            <td>
              <input type="text" name="txtAdd" id="txtLoc" className="txtbox" />
            </td>
          </tr>
          <tr className="rw">
            <td>Total Amount: </td>
            <td>${totalAmount}</td>
          </tr>
          <tr className="rw chkbtn">
            <td>
              <button onClick={() => confirmOrder() + navigate("/")}>
                PlaceOrder
              </button>
            </td>
            <td>
              <button onClick={() => navigate("/cart")}>BackToCart</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
