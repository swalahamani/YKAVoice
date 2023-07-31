import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootState} from "@store/index";

const useAppDispatch = () => {
	return useDispatch<AppDispatch>();
};

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {useAppDispatch, useAppSelector};
