
import { auth,provider } from "../../firebase/Firebase";
import API from "../../API/API";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { toast } from 'react-toastify';

const api = new API();
const endPoints = "emaillogin.json";

export const emailLoginApi = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      console.log("User in API --->", user);


    console.log("accesstoken",user.accessToken)
    console.log("email",user.email);
    // console.log("displayName",user.displayName);
    console.log("password",user.password)
    localStorage.setItem("emaillogintoken",user.accessToken)
    localStorage.setItem("emailloginemail",user.email)
    // localStorage.setItem("googlename",user.displayName)
    // const { accessToken, email } = user;

   
    const apiResponse = await api.post(`${endPoints}`,{email:user.email,accessToken:user.accessToken} );
 console.log("apiResponse",apiResponse);
    if (apiResponse && apiResponse.data) {
      toast.success("emailogin authentication is successful!");
      return apiResponse.data;
    } else {
      toast.error("emailogin authentication is failed");
      console.log("Failed to authenticate with custom API");
    }
} catch (error) {
    console.log(error.message);
  }
};

