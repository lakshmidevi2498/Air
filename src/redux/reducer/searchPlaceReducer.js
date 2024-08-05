import * as types from '../action/actionTypes'

const initialState = {
    searchData: {
      users: [],
      token: null,
      loading: false,
    },
  };

export const getSearchPlaceReducer = (state=initialState.searchData,action) => {

    console.log("this is getproducts data reducer----->")
    switch(action.type){
        case types.SEARCH_PLACE_START :
            return{
                ...state,
                loading:true,

            }
            case types.SEARCH_PLACE_SUCCESS :
                return{
                    ...state,
                    data:action.payload,
                    loading:false,
                }
                case types.SEARCH_PLACE_ERROR :
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }
                    default:
                        return state;
    }

}