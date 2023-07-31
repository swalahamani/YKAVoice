import {StyleSheet} from "react-native";

import {iTheme} from "@config/types/ThemeTypes";

import {wp} from "@utils/ResponsiveScreenUtil";

const createStyles = (theme: iTheme) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",

			backgroundColor: theme.colors.neutrals.background.screen,

			width: wp(100, true),
		},
	});

	return styles;
};

export default {createStyles};
