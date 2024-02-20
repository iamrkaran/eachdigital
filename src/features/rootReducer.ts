import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import likesSlice from "./likesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  likes: likesSlice,
});

export default rootReducer;
