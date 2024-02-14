import React, { useEffect, useState } from "react";
import { LoginFormObject } from "../Interfaces/LoginRegisterInterfaces";
import { userLoginAPI } from "../Services/APIservices";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/UserSlice";
import { IRootState } from "../Store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formObject, setFormObject] = useState<LoginFormObject>({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state: IRootState)=>state.user.loggedIn);

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);
  

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resp = await userLoginAPI(formObject);
    if (resp && resp.data && resp.data.message) {
      if (resp.data.statusCode === 200) {
        toast.success(resp.data.message, { position: "top-right" });
        dispatch(userActions.login(resp.data.user));
        navigate('/home');
        return;
      }
      toast.error(resp.data.message, { position: "top-right" });
      return;
    }
  };

  const formChangeHandler = (name: string, value: string) => {
    setFormObject({
      ...formObject,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <br />
        <br />
        <label>Enter User Name</label>{" "}
        <input
          name="userName"
          value={formObject.userName}
          onChange={(e) => formChangeHandler(e.target.name, e.target.value)}
          type="text"
        />
        <br />
        <label>Enter Password</label>{" "}
        <input
          name="password"
          value={formObject.password}
          onChange={(e) => formChangeHandler(e.target.name, e.target.value)}
          type="password"
        />
        <br />
        <button
          style={{ alignSelf: "center", width: "50%" }}
          className="btn btn-register"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
