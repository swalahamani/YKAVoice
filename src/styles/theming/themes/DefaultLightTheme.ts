import {iColorTheme, iTheme} from "@config/types/ThemeTypes";

import Colors from "@styles/Colors";

const colors: iColorTheme = {
	primary: Colors.WHITE,

	accents: {
		first: Colors.WHITE,
	},

	neutrals: {
		background: {
			screen: Colors.WHITE,
		},

		font: {
			heading: Colors.WHITE,

			paragraph: Colors.WHITE,

			highlight: Colors.WHITE,

			info: Colors.WHITE,
		},
	},

	semantic: {
		error: Colors.WHITE,

		warning: Colors.WHITE,

		success: Colors.WHITE,

		info: Colors.WHITE,
	},
};

const DefaultLightTheme: iTheme = {
	id: "default-light-theme",

	isDark: false,

	colors,
};

export default DefaultLightTheme;
