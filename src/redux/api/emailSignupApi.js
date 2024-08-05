

import { auth, } from "../../firebase/Firebase";
import API from "../../API/API";
import { createUserWithEmailAndPassword, } from "@firebase/auth";
import { toast } from 'react-toastify';

const api = new API();
const endPoints = "email.json";

export const emailSignupApi = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      console.log("User in API --->", user);

      const userEmail = user.email;
      const userFirstLetter = userEmail.charAt(0);
    console.log("accesstoken",user.accessToken)
    console.log("email",user.email);
    console.log("password",user.password)
    localStorage.setItem("emailsigntoken",user.accessToken)
    console.log("userFirstLetter",userFirstLetter)
    localStorage.setItem("emailsignemail",user.email)
   
    // localStorage.setItem("name",)
   

   
    const apiResponse = await api.post(`${endPoints}`,{email:user.email,accessToken:user.accessToken} );
    console.log("apiResponse",apiResponse);
    if (apiResponse && apiResponse.data) {
      toast.success("emailSignup successful!");

      return apiResponse.data;
    } else {
      toast.error("emailSignup failed ");
      console.log("Failed to authenticate with custom API");
    }
} catch (error) {
    console.log(error.message);
  }
};

