import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { signupReducer } from "./signUpReducer";
import { postListReducer } from "./PostListReducer";
import { postPageReducer } from "./PostpageReducer";
import { addPostReducer } from "./addPostReducers";

export default combineReducers({
  signupReducer,
  loginReducer,
  postListReducer,
  postPageReducer,
  addPostReducer, 
});
