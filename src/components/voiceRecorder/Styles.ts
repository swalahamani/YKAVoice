import {StyleSheet} from "react-native";

import {iTheme} from "@config/types/ThemeTypes";

import {hp, wp} from "@utils/ResponsiveScreenUtil";

const createStyles = (theme: iTheme) => {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",

			justifyContent: "flex-start",
			alignItems: "center",

			width: wp(90, true),
			height: hp(20, true),

			borderRadius: 10,
			borderWidth: 1,
			borderColor: theme.colors.primary,
		},
	});

	return styles;
};

export default {createStyles};
