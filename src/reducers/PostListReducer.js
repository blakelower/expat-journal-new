import * as types from "../actions/actionTypes";

const initialValues = {
  journals: []
};

export const postListReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_POST_START:
      return initialValues;
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        journals: action.payload
      };
    case types.POST_NEW_POST_START:
      return initialValues;
    case types.POST_NEW_POST_SUCCESS:
      return {
        ...state,
        journals: [...state.journals, action.payload]
      };
    case types.DELETE_POST_START:
      return {
        ...state
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        journals: [...state.journals, action.payload]
      };
    case types.UPDATE_POST_START:
      return {
        ...state
      };
    case types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        journals: [...state.journals, action.payload]
      };
    default:
      return state;
  }
};
