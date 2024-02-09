import axios from "axios";
import { LoginFormObject, RegistrationFormObject } from "../Interfaces/LoginRegisterInterfaces";

const baseURL = "http://localhost:4000/api/v1";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("intercept req config", config);
    return config;
  },
  (error) => {
    console.log("intercept req error", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (resp) => {
    console.log("intercept resp", resp);
    return resp;
  },
  (error) => {
    console.log("intercept resp error", error);
    return error;
  }
);

export const registerUserAPI = async (reqObj: RegistrationFormObject) => {
  return await axiosInstance.post("/registerUser", reqObj);
};

export const userLoginAPI = async (reqObj: LoginFormObject)=>{
  return await axiosInstance.post('/userLogin', reqObj);
}
