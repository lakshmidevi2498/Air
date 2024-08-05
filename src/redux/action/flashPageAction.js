import * as types from './actionTypes'

import { getFlashPageApi } from '../api/flashPageApi'

export const getFlashPageDataStart = () => {
    console.log("this is getproducts data action----->")
   return{
    type:types.LOAD_FLASH_PAGE_IMAGES_START,
   }
}
export const getFlashPageDataSuccess = (data) => {
    console.log("this is getFlashPageDataSuccess---->",data)
    return{
        type:types.LOAD_FLASH_PAGE_IMAGES_SUCCESS,
        payload:data
    }
}
export const getFlashPageDataError = (error) => {
    console.log("this is getFlashPageDataError---->",error)
return{
    type:types.LOAD_FLASH_PAGE_IMAGES_ERROR,
    payload:error
}
}

export const getFlashPageDataInitiate = () => {
    console.log("this is getFlashPageDataInitiate----->")
    return async (dispatch) => {
        dispatch(getFlashPageDataStart())
        try{
            const getdataresponse = await getFlashPageApi()
            console.log("getFlashPageDataInitiate--->",getdataresponse)
            dispatch(getFlashPageDataSuccess(getdataresponse))
        }
        catch(error){
            dispatch(getFlashPageDataError(error))
        }
    }
}