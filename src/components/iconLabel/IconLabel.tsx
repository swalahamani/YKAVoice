/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Mon Aug 16 2021
 *  File : IconLabel.tsx
 *******************************************/
import React, {FC} from "react";

import {View, Text, StyleSheet} from "react-native";

import RemixIcon from "@components/remixIcon";

import {TextStyleType, ViewStyleType} from "@config/types/ReactNativeTypes";

import {useThemeAwareObject} from "@styles/theming/ThemingHelper";

import Styles from "./Styles";

type Props = {
	style?: ViewStyleType;
	iconStyle?: TextStyleType;
	labelStyle?: TextStyleType;

	iconName: string;
	label: string;
};

const defaultProps: Partial<Props> = {
	style: {
		flexDirection: "row",
	},
	iconStyle: {},
	labelStyle: {},
};

const IconLabel: FC<Props> = ({
	style,
	iconStyle,
	labelStyle,
	iconName,
	label,
}: Props) => {
	// creating them aware style object
	const styles = useThemeAwareObject(Styles.createStyles);

	/**
	 * Function which returns the appropriate style file depending on different
	 * screen orientation or any other factors if necessary.
	 * @returns
	 */
	const getStyles = () => {
		return styles;
	};

	/**
	 * Renders RemixIcon with style based on the position it gets rendered
	 *
	 * @returns
	 */
	const renderIcon = () => {
		let iconPositionSpecificStyle = getStyles().iconAtBeginning;
		const containerStyle = StyleSheet.flatten(style);

		if (containerStyle.flexDirection === "row-reverse") {
			iconPositionSpecificStyle = getStyles().iconAtEnd;
		}

		return (
			<RemixIcon
				style={[getStyles().icon, iconPositionSpecificStyle, iconStyle]}
				name={iconName}
			/>
		);
	};

	return (
		<View style={[getStyles().container, style]}>
			{/* icon */}
			{renderIcon()}

			{/* label */}
			<Text style={[getStyles().labelTxt, labelStyle]}>{label}</Text>
		</View>
	);
};

IconLabel.defaultProps = defaultProps;
IconLabel.displayName = "IconLabel";

export default IconLabel;
