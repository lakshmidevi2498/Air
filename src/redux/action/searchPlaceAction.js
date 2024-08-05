import * as types from './actionTypes'
import { getSearchPlaceApi } from '../api/searchPlaceApi'

export const getSearchPlaceStart = () => {
    console.log("this is getsearchplace action----->")
   return{
    type:types.SEARCH_PLACE_START,
   }
}
export const getSearchPlaceSuccess = (data) => {
    console.log("this is getsearchplaceSuccess---->",data)
    return{
        type:types.SEARCH_PLACE_SUCCESS,
        payload:data
    }
}
export const getSearchPlaceError = (error) => {
    console.log("this is getsearchplaceError---->",error)
return{
    type:types.SEARCH_PLACE_ERROR,
    payload:error
}
}

export const getSearchPlaceInitiate = () => { 
    console.log("this is getsearchplace data initiate----->")
    return async (dispatch) => {
        dispatch(getSearchPlaceStart())
        try{
            const getsearchresponse = await getSearchPlaceApi() 
            dispatch(getSearchPlaceSuccess(getsearchresponse))
        }
        catch(error){
            dispatch(getSearchPlaceError(error))
        }
    }
}