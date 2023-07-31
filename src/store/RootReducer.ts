import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "@store/auth/AuthSlice";

const rootReducer = combineReducers({
	authReducer,
});

export default rootReducer;
