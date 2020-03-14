import * as types from "../actions/actionTypes";

const initialValues = {
  loginInput: {
    email: "",
    password: ""
  },
  isLoading: false, 
  error: ""
};

export const loginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loginInput: {
          ...state.loginInput,
          [action.payload.inputName]: action.payload.inputValue
        }
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: true
      };
    case types.LOGIN_POST:
      return {
        ...state,
        isLoading: false
      };
    case types.LOGIN_FAILED:
      return initialValues;
      
    default:
      return state;
  }
};
