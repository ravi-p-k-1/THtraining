import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../Store";
import { userActions } from "../Store/UserSlice";

export default function Header() {
  const loggedIn = useSelector((state: IRootState) => state.user.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      Tweeter App
      <div className="login-register-div">
        {!loggedIn && (
          <>
            <button
              className="btn btn-login"
              onClick={() => navigate("/login")}
            >
              Login
            </button>{"  "}
            |
            <button
              className="btn btn-register"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        )}
        {loggedIn && (
          <>
            <button 
              className="btn btn-login"
              onClick={()=>{dispatch(userActions.logout()); navigate('/login')}}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
