// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\client\src\reducers\index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer
});