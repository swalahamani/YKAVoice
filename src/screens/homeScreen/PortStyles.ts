import {StyleSheet} from "react-native";

import {iTheme} from "@config/types/ThemeTypes";

import {wp} from "@utils/ResponsiveScreenUtil";

const createStyles = (theme: iTheme) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "flex-start",
			alignItems: "center",

			backgroundColor: theme.colors.neutrals.background.screen,

			paddingTop: wp(5, true),

			width: wp(100, true),
		},

		generateBtn: {
			marginTop: wp(5, true),
		},
	});

	return styles;
};

export default {createStyles};
