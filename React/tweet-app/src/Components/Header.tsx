import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  return (
    <header>
      Tweeter App
      <div className="login-register-div">
        <button className="btn btn-login" onClick={()=>navigate('/login')}>Login</button>  |  <button className="btn btn-register" onClick={()=>navigate('/register')}>Register</button>
      </div>
    </header>
  );
}
