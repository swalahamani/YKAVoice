import React, {FC, useEffect, useState} from "react";

import {View, Text} from "react-native";

import {
	listenOrientationChange,
	removeOrientationListener,
	currentOrientation,
} from "react-native-responsive-screen";
import {useTranslation} from "react-i18next";

import {useThemeAwareObject} from "@styles/theming/ThemingHelper";

import PortStyles from "./PortStyles";

type Props = {};

const defaultProps: Partial<Props> = {};

const HomeScreen: FC<Props> = () => {
	const {t} = useTranslation();

	// orientation state for handling styles on screen-orientation changes
	const [orientation, setOrientation] = useState(currentOrientation());

	/**
	 * listener for managing screen-orientation changes for dynamically managing style
	 * dimensions.
	 */
	useEffect(() => {
		// registering orientation change listener
		listenOrientationChange({setStateHook: setOrientation});

		// returning clear handler for removing the orientation change listener
		return () => {
			removeOrientationListener();
		};
	}, []);

	// creating them aware style object
	const portStyles = useThemeAwareObject(PortStyles.createStyles, orientation);

	/**
	 * Function which returns the appropriate style file depending on different
	 * screen orientation or any other factors if necessary.
	 * @returns
	 */
	const getStyles = () => {
		return portStyles;
	};

	return (
		<View style={getStyles().container}>
			<Text>YKAVoice HomeScreen</Text>

			<Text>{t("HELLO")}</Text>
		</View>
	);
};

HomeScreen.defaultProps = defaultProps;
HomeScreen.displayName = "HomeScreen";

export default HomeScreen;
