import {
	widthPercentageToDP,
	heightPercentageToDP,
	listenOrientationChange,
	removeOrientationListener,
} from "react-native-responsive-screen";

import {
	BASE_SCREEN_DESIGN_WIDTH,
	BASE_SCREEN_DESIGN_HEIGHT,
} from "@config/constants/ResponsiveScreenConstants";

/**
 * Returns the react-native-responsive-screen widthPercentageToDP based on
 * the BASE_SCREEN_DESIGN_WIDTH if the ignoreBaseDesignWidth is false.
 *
 * @param dimension
 * @param ignoreBaseDesignWidth
 * @returns
 */
function wp(dimension: number, ignoreBaseDesignWidth: boolean = false): number {
	if (ignoreBaseDesignWidth || BASE_SCREEN_DESIGN_WIDTH === 0) {
		return widthPercentageToDP(dimension);
	}

	/**
	 * Calculating percentage of dimension with respect to BASE_SCREEN_DESIGN_WIDTH
	 */
	const widthPercentage = (dimension / BASE_SCREEN_DESIGN_WIDTH) * 100;

	return widthPercentageToDP(widthPercentage);
}

/**
 * Returns the react-native-responsive-screen heightPercentageToDP based on
 * the BASE_SCREEN_DESIGN_HEIGHT if the ignoreBaseDesignHeight is false.
 *
 * @param dimension
 * @param ignoreBaseDesignHeight
 * @returns
 */
function hp(
	dimension: number,
	ignoreBaseDesignHeight: boolean = false,
): number {
	if (ignoreBaseDesignHeight || BASE_SCREEN_DESIGN_HEIGHT === 0) {
		return heightPercentageToDP(dimension);
	}

	/**
	 * Calculating percentage of dimension with respect to BASE_SCREEN_DESIGN_HEIGHT
	 */
	const heightPercentage = (dimension / BASE_SCREEN_DESIGN_HEIGHT) * 100;

	return heightPercentageToDP(heightPercentage);
}

export {
	wp,
	hp,
	/**
	 * Exporting of both react-native-responsive-screen listenOrientationChange and removeOrientationListener
	 * are done for avoiding mixed imports of react-native-responsive-screen while utilizing wp and hp.
	 */
	listenOrientationChange,
	removeOrientationListener,
};
