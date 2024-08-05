
import * as types from "./actionTypes";
import { mobileLoginApi } from "../api/mobileLoginApi";
import { toast } from "react-toastify";

export const mobileLoginStart = (data) =>{ 
  return{
  type: types.PHONENUMBER_LOGIN_START,
  payload:data
};
}

export const mobileLoginSuccess = (data) => {
  console.log("this is mobileLoginSuccessAction---->" ,data)
  return{
  
  type: types.PHONENUMBER_LOGIN_SUCCESS,
  // payload: data,
};
};

export const mobileLoginError = (error) => {
  console.log("this is mobileLoginErrorAction---->" ,error)
return{
  type: types.PHONENUMBER_LOGIN_ERROR,
  payload: error,
};
}

export const mobileLoginInitiate = (phoneNumber, ) => {
  console.log("phonenumber in initiater",phoneNumber)
  return async (dispatch) => {
    dispatch(mobileLoginStart(phoneNumber));
    try {
      const mobilelogindata = await mobileLoginApi(phoneNumber, 'recaptcha-container');
      console.log("mobilelogindata--->",mobilelogindata)
      dispatch(mobileLoginSuccess(mobilelogindata.apiResponse));
      return mobilelogindata.response;
    } catch (err) {
      dispatch(mobileLoginError(err));
      console.log('error', err);
    }
  };
};




