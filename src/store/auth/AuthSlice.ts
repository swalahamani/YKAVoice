import {createSlice} from "@reduxjs/toolkit";

import {iAuthState, REDUCER_NAME} from "./Types";

import {} from "./ThunkActions";

const initialState: iAuthState = {};

export const authSlice = createSlice({
	name: REDUCER_NAME,
	initialState,
	reducers: {
		resetAuthState: () => {
			return initialState;
		},
	},
});

export const {resetAuthState} = authSlice.actions;

export default authSlice.reducer;
