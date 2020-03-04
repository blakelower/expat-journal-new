import { combineReducers } from "redux";
import { loginFormReducer } from "./loginReducer";
import { signupReducer } from "./signUpReducer";
import { journalListReducer } from "./JournalListReducer";
import { journalPageReducer } from "./journalPageReducer";
import { addJournalReducer } from "./addJournalReducer";

export default combineReducers({
  loginFormReducer,
  signupReducer,
  journalListReducer,
  journalPageReducer,
  addJournalReducer
});
