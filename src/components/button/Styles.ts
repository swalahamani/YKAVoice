/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Tue Aug 10 2021
 *  File : Styles.ts
 *******************************************/
import {StyleSheet} from "react-native";

import {iTheme} from "@config/types/ThemeTypes";

import {hp, wp} from "@utils/ResponsiveScreenUtil";

const createStyles = (theme: iTheme) => {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",

			width: wp(250),
			height: hp(120),

			borderRadius: wp(25),

			elevation: 5,

			backgroundColor: theme.colors.accents.first,
		},

		labelTxt: {
			color: theme.colors.secondary,
		},
	});

	return styles;
};

export default {createStyles};
