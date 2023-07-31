import React from "react";

import {
	ImageStyle,
	TextStyle,
	ViewStyle,
	GestureResponderEvent,
	StyleProp,
} from "react-native";

import {ComponentIdType} from "./CommonTypes";

type OrientationType = "portrait" | "landscape";

type ViewStyleType = StyleProp<ViewStyle>;
type ImageStyleType = StyleProp<ImageStyle>;
type TextStyleType = StyleProp<TextStyle>;
type ReactNodeArray = Array<React.ReactNode>;

type TestIDType = string | undefined;
type AccessibilityLabelType = string | undefined;

type ActivityIndicatorSizeType = number | "small" | "large";

type ButtonOnPressType =
	| ((id: ComponentIdType, event: GestureResponderEvent) => void)
	| undefined;

export type {
	OrientationType,
	ViewStyleType,
	ImageStyleType,
	TextStyleType,
	ReactNodeArray,
	TestIDType,
	AccessibilityLabelType,
	ActivityIndicatorSizeType,
	ButtonOnPressType,
};
