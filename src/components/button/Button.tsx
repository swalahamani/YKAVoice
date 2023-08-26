/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Aug 10 2021
 *  File : Button.tsx
 *******************************************/
import React, {FC} from "react";

import {
	TouchableOpacity,
	Text,
	ActivityIndicator,
	ColorValue,
	GestureResponderEvent,
	TextProps,
} from "react-native";

import {ComponentIdType, NullableString} from "@config/types/CommonTypes";
import {
	AccessibilityLabelType,
	ActivityIndicatorSizeType,
	ButtonOnPressType,
	TestIDType,
	TextStyleType,
	ViewStyleType,
} from "@config/types/ReactNativeTypes";

import {useThemeAwareObject} from "@styles/theming/ThemingHelper";
import Colors from "@styles/Colors";

import Styles from "./Styles";

type Props = {
	id?: ComponentIdType;
	testID?: TestIDType;
	accessibilityLabel?: AccessibilityLabelType;

	style?: ViewStyleType;
	labelStyle?: TextStyleType;
	loadingIndicatorColor?: ColorValue;
	loadingIndicatorSize?: ActivityIndicatorSizeType;

	disabled?: boolean;
	isLoading?: boolean;
	label?: NullableString;
	children?: React.ReactNode;
	labelTextProps?: TextProps;

	onPress?: ButtonOnPressType;
	onLongPress?: ButtonOnPressType;
};

const defaultProps: Partial<Props> = {
	id: undefined,
	testID: undefined,
	accessibilityLabel: undefined,

	style: {},
	labelStyle: {},
	loadingIndicatorColor: Colors.WHITE,
	loadingIndicatorSize: "small",

	disabled: false,
	isLoading: false,
	label: "Button",
	children: null,
	labelTextProps: {},

	onPress: undefined,
	onLongPress: undefined,
};

const Button: FC<Props> = ({
	id,
	testID,
	accessibilityLabel,

	style,
	labelStyle,
	loadingIndicatorColor,
	loadingIndicatorSize,

	disabled,
	isLoading,
	label,
	children,
	labelTextProps,

	onPress,
	onLongPress,
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
	 * Returns ActivityIndicator if isLoading is true,
	 * else returns null.
	 * @returns
	 */
	const renderLoadingIndicator = (): React.ReactNode => {
		if (isLoading) {
			return (
				<ActivityIndicator
					color={loadingIndicatorColor}
					size={loadingIndicatorSize}
				/>
			);
		}

		return null;
	};

	/**
	 * Checking whether the label is set or not.
	 * If it is set, then will return a Text component with the label
	 * else will return null.
	 *
	 * @returns
	 */
	const renderLabelTxt = (): React.ReactNode => {
		if (label && label.length >= 0) {
			return (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Text style={[getStyles().labelTxt, labelStyle]} {...labelTextProps}>
					{label}
				</Text>
			);
		}

		return null;
	};

	/**
	 * Checking whether the children is set or not.
	 * If it is set, then will return the children,
	 * else will return null.
	 *
	 * @returns
	 */
	const renderChildren = (): React.ReactNode => {
		if (children) {
			return children;
		}

		return null;
	};

	/**
	 * Checks whether onPress prop is available,
	 * and invokes it by passing id and event if it is available.
	 *
	 * @param event
	 */
	const localOnPress = (event: GestureResponderEvent) => {
		if (onPress) {
			onPress(id, event);
		}
	};

	/**
	 * Checks whether onLongPress prop is available,
	 * and invokes it by passing id and event if it is available.
	 *
	 * @param event
	 */
	const localOnLongPress = (event: GestureResponderEvent) => {
		if (onLongPress) {
			onLongPress(id, event);
		}
	};

	return (
		<TouchableOpacity
			style={[getStyles().container, style]}
			testID={testID}
			accessibilityLabel={accessibilityLabel}
			disabled={disabled}
			onPress={localOnPress}
			onLongPress={localOnLongPress}
		>
			{renderLoadingIndicator()}

			{renderLabelTxt()}

			{renderChildren()}
		</TouchableOpacity>
	);
};

Button.defaultProps = defaultProps;
Button.displayName = "Button";

export default Button;

export type {Props as ButtonProps};
