
import { auth } from "../../firebase/Firebase";
import API from "../../API/API";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";

const api = new API();
const endPoints = "mobilelogin.json";

export const mobileLoginApi = async (phoneNumber, recaptchaContainerId) => {
  try {
    const recaptchaVerifier = new RecaptchaVerifier( auth ,recaptchaContainerId, {
      size: 'visible',
      callback: (response) => {
        console.log('Recaptcha resolved', response);
      }
    });

    await recaptchaVerifier.render();

    console.log("phoneNumber in api ---->", phoneNumber);
    const number = localStorage.setItem("number",phoneNumber.charAt(3))
    console.log("phoneNumber in api ---->", phoneNumber.charAt(3));

    const response = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
    console.log("response", response);
    const apiResponse = await api.post(endPoints, { phoneNumber });
    console.log("response apiResponse",  apiResponse )
    if (apiResponse && apiResponse.data) {
     
      return { response, apiResponse: apiResponse.data };
     
    }
  } catch (error) {console.log("errorin Api",error)
  }
};



