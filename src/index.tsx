import React from "react";

import {} from "react-native";

import {defaultThemeId} from "@config/constants/ThemeConstants";

import {ThemeProvider} from "@styles/theming/ThemeContext";

import RootNavigator from "@navigation/index";

import "@config/Localization";

function AppRoot() {
	return (
		<ThemeProvider initialThemeId={defaultThemeId}>
			<RootNavigator />
		</ThemeProvider>
	);
}

export default AppRoot;
