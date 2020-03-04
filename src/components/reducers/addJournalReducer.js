import * as types from "../actions/actionTypes";

const initialValues = {
  message: "",
  location: ""
};


export const addJournalReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.ADD_INPUT:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };

    case types.POST_NEW_POST_SUCCESS:
      return initialValues;

    //new: editing

    case types.EDIT_POST:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };

    case types.UPDATE_POST_SUCCESS:
      return initialValues;

    default:
      return state;
  }
};
