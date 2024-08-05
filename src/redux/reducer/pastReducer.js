import * as types from '../action/actionTypes'

const initialState = {
    loadPastImageData: {
      users: [],
      token: null,
      loading: false,
    },
  };
  const loadPastImageDataReducer = (state = initialState.loadPastImageData, action) => {
    switch (action.type) {
      case types.LOAD_PAST_IMAGES_START:
        return {
          ...state,
          loading: true,
        };
      case types.LOAD_PAST_IMAGES_SUCCESS:
        console.log("action", action);
        console.log("data in reducer", action.payload);
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case types.LOAD_PAST_IMAGES_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default loadPastImageDataReducer;