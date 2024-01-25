import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  // const cartItems = useSelector((state)=> state.cart.itemsList);
  const showCart = useSelector((state)=> state.cart.showCart);
  console.log(showCart);

  return (
    <div className="App">
      { isLoggedIn ? <Layout /> : <Auth /> }
    </div>
  );
}

export default App;
