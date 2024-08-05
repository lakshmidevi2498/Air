import * as types from '../action/actionTypes'

const initialState = {
    loadFlashData: {
      users: [],
      token: null,
      loading: false,
    },
  };

export const getFlashPageReducer = (state=initialState.loadFlashData,action) => {
    console.log("this is getFlashPageReducer ----->")
    switch(action.type){
        case types.LOAD_FLASH_PAGE_IMAGES_START :
            return{
                ...state,
                loading:true,

            }
            case types.LOAD_FLASH_PAGE_IMAGES_SUCCESS :
                return{
                    ...state,
                    data:action.payload,
                    loading:false,
                }
                case types.LOAD_FLASH_PAGE_IMAGES_ERROR :
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }
                    default:
                        return state;
    }

}