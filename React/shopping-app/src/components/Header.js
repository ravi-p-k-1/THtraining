import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { cartActions } from "../store/cart-slice";
const Header = () => {

  const dispatch = useDispatch();
  const showCart = useSelector((state)=>state.cart.showCart);

  const handleLogout=()=>{
    dispatch(authActions.logout());
    if(showCart){
      dispatch(cartActions.setShowCart());
    }
  }

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="logout-btn" onClick={handleLogout} >Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
