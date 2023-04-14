import React from "react";
// import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { AlignRight } from "phosphor-react";
// import "./NavbarCSS.css";

export const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();

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
          TECH SHOP
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
            {/* <li className="authuser">
              {isAuthenticated && (
                <li className="fa fa-user">
                  <p>{user.name}</p>
                </li>
              )}
            </li> */}
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
          <ul className="navbar-nav">
            {isAuthenticated ? (
              <li className=" btnlog">
                <Link
                  className="nav-link btn btn-danger"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </Link>
              </li>
            ) : (
              // <li>
              //   <button
              //     className="btn btn-dark authuser"
              //     onClick={() => loginWithRedirect()}
              //   >
              //     Log In
              //   </button>
              // </li>
              <li className=" btnlog">
                <Link className="nav-link" onClick={() => loginWithRedirect()}>
                  Login
                </Link>
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
