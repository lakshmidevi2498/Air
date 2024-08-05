import { combineReducers } from "redux";
import { getProductsDataReducer } from "./getProductsDataReducer";
import { googleLoginReducer } from "./googleLoginReducer";
import {  emailSignupReducer } from "./emailSignupReducer";
import { emailLoginReducer } from "./emailLoginReducer";
import { mobileLoginReducer } from "./mobileLoginReducer";
import { getSearchPlaceReducer } from "./searchPlaceReducer";
import { getFlashPageReducer } from "./flashPageReducer";
import loadPastImageDataReducer from "./pastReducer";

export const rootReducer = combineReducers(
    {
   
    googleloginreducer:googleLoginReducer,
    emailloginreducer:emailLoginReducer,
    emailsignupreducer:emailSignupReducer,
    mobileloginreducer:mobileLoginReducer,
    getproductsdatareducer:getProductsDataReducer,
    getsearchplacereducer:getSearchPlaceReducer,
    flashpagedata:getFlashPageReducer,
    pastimagesdata:loadPastImageDataReducer,
})