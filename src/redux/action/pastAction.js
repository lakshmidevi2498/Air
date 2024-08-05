import * as types from './actionTypes'
import { pastImagesDataApi } from '../api/pastApi'

export const pastImagesDataStart = () => {
    console.log("this is pastImagesDataStart----->")
   return{
    type:types.LOAD_PAST_IMAGES_START,
   }
}
export const pastImagesDataSuccess = (data) => {
    console.log("this is pastImagesDataSuccess---->",data)
    return{
        type:types.LOAD_PAST_IMAGES_SUCCESS,
        payload:data
    }
}
export const pastImagesDataError = (error) => {
    console.log("this is pastImagesDataError---->",error)
return{
    type:types.LOAD_PAST_IMAGES_ERROR,
    payload:error
}
}


export const pastImagesDataInitiate = () => {
    console.log("user in mobile actionss",);
    return function (dispatch) {
      dispatch(pastImagesDataStart());
      pastImagesDataApi()
        .then((res) => {
         console.log(res);
         dispatch(pastImagesDataSuccess(res));
        })
        .catch((error) => dispatch(pastImagesDataError(error.message)));
    };
  };
