
import * as types from "../action/actionTypes";

const initialState = {
  data3: null,
  error: null,
  loading: false,
};

export const emailLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EMAILANDPASSWORD_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.EMAILANDPASSWORD_LOGIN_SUCCESS:
        console.log("this is emailloginsuccessreducer----> ");
      return {
        ...state,
        data2: action.payload,
        loading: false,
        error: null,
      };
    case types.EMAILANDPASSWORD_LOGIN_ERROR:
        console.log("this is emailloginerrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
