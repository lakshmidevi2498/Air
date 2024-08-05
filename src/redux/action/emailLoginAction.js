import * as types from './actionTypes'
import { emailLoginApi } from '../api/emailLoginApi'
import { toast } from 'react-toastify';

export const emailLoginStart= () => ({
type:types.EMAILANDPASSWORD_LOGIN_START
})

export const emailLoginSuccess = (data) => (
    console.log("this is emailLoginSuccessAction---->" ,),
    {
    type:types.EMAILANDPASSWORD_LOGIN_SUCCESS,
    payload:data
})

export const emailLoginError = (error) => (
    console.log("this is emailLoginErrorAction---->" ,error),
    {
    type:types.EMAILANDPASSWORD_LOGIN_ERROR,
    payload:error
})

export const emailLoginInitiate = (email,password,navigate) => {
    return async (dispatch)=>{
        dispatch(emailLoginStart())
        try {
          const emaillogindata = await emailLoginApi(email,password)
          dispatch(emailLoginSuccess(emaillogindata))
          navigate('/')
  
        } catch (err) {
          console.log("error",err)
          dispatch(emailLoginError(err))
          toast.error("Email & Password authentication failed")
  
        }
    }
}