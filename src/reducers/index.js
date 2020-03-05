import { combineReducers } from "redux";
import { loginFormReducer } from "./loginReducer";
import { signupReducer } from "./signUpReducer";
import { postListReducer } from "./PostListReducer";
import { postPageReducer } from "./PostpageReducer";
import { addPostReducer } from "./addPostReducers";

export default combineReducers({
  loginFormReducer,
  signupReducer,
  postListReducer,
  postPageReducer,
  addPostReducer, 
});
