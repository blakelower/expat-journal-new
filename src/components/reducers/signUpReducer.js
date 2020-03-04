import * as types from "../actions/actionTypes";

const initialValues = {
  signUpInput: {
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: ""
  },
  isLoading: false,
  sendUser: {}
};

export const signupReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.SIGNUP_START:
      return {
        ...state,
        signUpInput: {
          ...state.signUpInput,
          [action.payload.inputName]: action.payload.inputValue
        }
      };

    case types.SIGNUP_SUCCESS :
      return {
        ...state,
        isLoading: true
      };

    case types.SIGNUP_POST:
      return {
        ...state,
        isLoading: false,
        sendUser: action.payload
      };

    case types.SIGNUP_FAILED:
      return initialValues;

    default:
      return state;
  }
};