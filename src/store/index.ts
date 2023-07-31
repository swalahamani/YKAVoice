import {configureStore} from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

import rootReducer from "@store/RootReducer";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(reduxLogger);
	},
	devTools: false,
});

type StoreType = typeof store;
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;

export type {StoreType, RootState, AppDispatch};
