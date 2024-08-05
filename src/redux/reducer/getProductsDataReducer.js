import * as types from '../action/actionTypes'

const initialState = {
    productsData: {
      users: [],
      token: null,
      loading: false,
    },
  };

export const getProductsDataReducer = (state=initialState.productsData,action) => {
    console.log("this is getproducts data reducer----->")
    switch(action.type){
        case types.LOAD_PRODUCTS_DATA_START :
            return{
                ...state,
                loading:true,

            }
            case types.LOAD_PRODUCTS_DATA_SUCCESS :
                return{
                    ...state,
                    data:action.payload,
                    loading:false,
                }
                case types.LOAD_PRODUCTS_DATA_ERROR :
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }
                    default:
                        return state;
    }

}