import { combineReducers } from "redux";
import { loginFormReducer } from "./loginReducer";
import { signupReducer } from "./signUpReducer";
import { journalListReducer } from "./PostListReducer";
import { journalPageReducer } from "./PostpageReducer";
import { addJournalReducer } from "./addPostReducers";

export default combineReducers({
  loginFormReducer,
  signupReducer,
  journalListReducer,
  journalPageReducer,
  addJournalReducer
});
