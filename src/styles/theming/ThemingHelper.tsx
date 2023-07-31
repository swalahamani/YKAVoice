import React from "react";

import {iTheme} from "@config/types/ThemeTypes";
import {OrientationType} from "@config/types/ReactNativeTypes";

import {useTheme} from "./ThemeContext";

/**
 * A type alias for the generator function.
 * NOTE: It should match the form of "createStyles"
 * function in the functional components.
 */
type Generator<T extends {}> = (theme: iTheme) => T;

/**
 * Custom hook for creating theme aware StyleSheet object.
 *
 * @param fn
 * @returns
 */
const useThemeAwareObject = <T extends {}>(
	fn: Generator<T>,
	orientation?: OrientationType,
) => {
	/**
	 * Consuming the provided value of the them context.
	 */
	const {theme} = useTheme();

	/**
	 * Generating the object based on the current selected theme.
	 */
	const ThemeAwareObject = React.useMemo(() => {
		return fn(theme);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fn, theme, orientation]);

	return ThemeAwareObject;
};

export {useThemeAwareObject};
