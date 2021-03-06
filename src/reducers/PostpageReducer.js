import * as types from "../actions/actionTypes";

const initialValues = {
  journal: []
};

export const postPageReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_ID_POST_START:
      return initialValues;

    case types.GET_ID_POST_SUCCESS:
      return {
        ...state,
        journal: action.payload
      };

    default:
      return state;
  }
};
