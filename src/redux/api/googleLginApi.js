
import { signInWithPopup } from "firebase/auth";
import { auth,provider } from "../../firebase/Firebase";
import API from "../../API/API";
import { toast } from 'react-toastify';

const api = new API();
const endPoints = "google.json";

export const googleLoginApi = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const user = response.user;
    console.log("userin api--->",user)
    console.log("accesstoken",user.accessToken)
    console.log("email",user.email);
    console.log("displayName",user.displayName);
    localStorage.setItem("googletoken",user.accessToken)
    localStorage.setItem("googleemail",user.email)
    localStorage.setItem("googlename",user.displayName)
    const { accessToken, email, displayName } = user;

   
    const apiResponse = await api.post(`${endPoints}`, { accessToken, email, displayName });
    console.log("apiResponse",apiResponse);
    if (apiResponse && apiResponse.data) {
      toast.success("googleLogin successful!");
      return apiResponse.data;
    } else {
      toast.error("googleLogin failed ");
      console.log("Failed to authenticate with custom API");
    }
  } catch (error) {
    console.log(error.message);
  }
};

