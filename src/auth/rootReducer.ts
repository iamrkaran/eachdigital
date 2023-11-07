// rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
// import otherReducer from './otherSlice'; // Import other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
  // For example:
  // other: otherReducer,
});

export default rootReducer;
