/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Mon Aug 16 2021
 *  File : Styles.ts
 *******************************************/
import {StyleSheet} from "react-native";

import {iTheme} from "@config/types/ThemeTypes";

import {hp, wp} from "@utils/ResponsiveScreenUtil";

const createStyles = (theme: iTheme) => {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},

		icon: {
			fontSize: hp(14.67),
			color: theme.colors.neutrals.font.highlight,
		},

		iconAtBeginning: {
			marginLeft: 0,
			marginRight: wp(6),
		},

		iconAtEnd: {
			marginLeft: wp(6),
			marginRight: 0,
		},

		labelTxt: {
			color: theme.colors.secondary,
		},
	});

	return styles;
};

export default {createStyles};
