
import * as types from "../action/actionTypes";

const initialState = {
  data4: null,
  error: null,
  loading: false,
};

export const mobileLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PHONENUMBER_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.PHONENUMBER_LOGIN_SUCCESS:
        console.log("this is mobileloginsuccessreducer----> ");
      return {
        ...state,
        data2: action.payload,
        loading: false,
        error: null,
      };
    case types.PHONENUMBER_LOGIN_ERROR:
        console.log("this is mobileloginerrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
