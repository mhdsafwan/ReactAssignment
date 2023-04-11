import React, { useEffect, useState } from "react";
// import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import "./NavbarCSS.css";

export const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  //location
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   }),
  //     (error) => {
  //       console.error(error);
  //     };
  // });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    // <div>
    //   <div classNameNameName="links">
    //     <Link to="/">Shop</Link>
    //     <Link to="/cart">
    //       <ShoppingCart size={32} />
    //     </Link>
    //     <Link to="/wishlist">Wishlist</Link>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          KDBS TECH SHOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="wishlist">
                Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cart">
                Cart
              </Link>
            </li>
            <li className="authuser">
              {isAuthenticated && (
                <li className="fa fa-user">
                  <p>{user.name}</p>
                </li>
              )}
            </li>
            {/* <li>
              <button
                className="btn btn-primary"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
              ;
            </li>
            <li>
              <button
                className="btn btn-danger"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li> */}
          </ul>
          <ul className="authuser">
            {isAuthenticated ? (
              <li>
                <button
                  className="btn btn-danger auth"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="btn btn-primary "
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
        {/* <div>
          {latitude && longitude ? (
            <p>
              your latitude is {latitude} and your longitude is {longitude}
            </p>
          ) : (
            <p>Loading</p>
          )}
        </div> */}
      </div>
    </nav>
  );
};
