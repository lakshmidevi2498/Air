
import * as types from './actionTypes'
import { emailSignupApi } from '../api/emailSignupApi' 


export const emailSignupStart= () => ({
type:types.EMAILANDPASSWORD_SIGNUP_START
})

export const emailSignupSuccess = (data) => (
    console.log("this is emailSignupSuccessAction---->" ,),
    {
    type:types.EMAILANDPASSWORD_SIGNUP_SUCCESS,
    payload:data
})

export const emailSignupError = (error) => (
    console.log("this is emailSignupErrorAction---->" ,error),
    {
    type:types.EMAILANDPASSWORD_SIGNUP_ERROR,
    payload:error
})

export const emailSignupInitiate = (email, password,navigate) => {
    return async (dispatch) => {
      dispatch(emailSignupStart());
      console.log("dfcvgbh")
      try {
        const emaildata = await emailSignupApi(email, password);
        dispatch(emailSignupSuccess(emaildata));
        console.log("dfcvgbh----")
        navigate("/"); 
      } catch (error) {
        dispatch(emailSignupError(error));
      }
    };
  };