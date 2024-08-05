import * as types from './actionTypes'
import { getProductsDataApi } from '../api/getProductsDataAPi'

export const getProductsDataStart = () => {
    console.log("this is getproducts data action----->")
   return{
    type:types.LOAD_PRODUCTS_DATA_START,
   }
}
export const getProductsDataSuccess = (data) => {
    console.log("this is getProductsDataSuccess---->",data)
    return{
        type:types.LOAD_PRODUCTS_DATA_SUCCESS,
        payload:data
    }
}
export const getProductsDataError = (error) => {
    console.log("this is getProductsDataError---->",error)
return{
    type:types.LOAD_PRODUCTS_DATA_ERROR,
    payload:error
}
}

export const getProductsDataInitiate = () => {
    console.log("this is getproducts data initiate----->")
    return async (dispatch) => {
        dispatch(getProductsDataStart())
        try{
            const getdataresponse = await getProductsDataApi()
            dispatch(getProductsDataSuccess(getdataresponse))
        }
        catch(error){
            dispatch(getProductsDataError(error))
        }
    }
}