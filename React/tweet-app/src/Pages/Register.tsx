import React, { useState } from "react";
import { RegistrationFormObject } from "../Interfaces/LoginRegisterInterfaces";
import { registerUserAPI } from "../Services/APIservices";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import registerPageRegex from "../Utilities/Regex/RegisterPage";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [formObject, setFormObject] = useState<RegistrationFormObject>({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    contact: "",
  });

  // useEffect(() => {
  //   console.log(formObject);
  // }, [formObject]);

  const formChangeHandler = (name: string, value: string) => {
    setFormObject({
      ...formObject,
      [name]: value,
    });
  };

  const submit = async () => {
    try {
      const reqObj: RegistrationFormObject = { ...formObject };

      const resp: AxiosResponse = await registerUserAPI(reqObj);
      
      // if(resp instanceof AxiosError){
      //   toast.error(resp.message);
      // }

      if (resp && resp.data && resp.data.statusCode===201) {
        toast.success("User registered successfully", {
          position: "top-right",
        });
        setFormObject({
          firstName: "",
          lastName: "",
          userName: "",
          password: "",
          contact: "",
        });
        navigate('/login');
      }

      if(resp && resp.data && resp.data.statusCode===404) {
        toast.warning("username already exists",{
          position: "top-right",
        });
      }

    }catch(error: any) {
      if (error) {
        toast.error(error.message);
      }
    }
  };

  const formValidation = () => {
    const {
      userNamePattern,
      lastNamePattern,
      firstNamePattern,
      contactPattern,
      passwordPattern,
    } = registerPageRegex;

    return (
      userNamePattern.test(formObject.userName) &&
      lastNamePattern.test(formObject.lastName) &&
      firstNamePattern.test(formObject.firstName) &&
      contactPattern.test(formObject.contact) &&
      passwordPattern.test(formObject.password)
    );
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const valid = formValidation();
    if (valid) {
      submit();
    } else {
      toast.error("Please enter valid details", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="register" onSubmit={(e) => onFormSubmit(e)}>
      <form>
        <h1 style={{ textAlign: "center" }}>User Registration Form</h1>
        <br />
        <br />
        <label>Enter First Name</label>{" "}
        <input
          type="text"
          name="firstName"
          value={formObject.firstName}
          onChange={(e) => formChangeHandler(e.target.name, e.target.value)}
        />
        <br />
        <label>Enter Last Name</label>{" "}
        <input
          type="text"
          name="lastName"
          value={formObject.lastName}
          onChange={(e) => formChangeHandler(e.target.name, e.target.value)}
        />
        <br />
        <label>Enter Contact Number</label>{" "}
        <input
          type="text"
          name="contact"
          value={formObject.contact}
          onChange={(e) => formChangeHandler(e.target.name, e.target.value)}
        />
        <br />
        <label>Enter User Name</label>{" "}
        <input
          type="text"
          name="userName"
          value={formObject.userName}
          onChange={(e) => formChangeHandler(e.target.name, e.target.value)}
        />
        <br />
        <label>Enter Password</label>{" "}
        <input
          type="password"
          name="password"
          value={formObject.password}
          onChange={(e) => formChangeHandler(e.target.name, e.target.value)}
        />
        <br />
        <button
          style={{ alignSelf: "center", width: "50%" }}
          className="btn btn-register"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
