import "react-native-gesture-handler";

import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import RNBootSplash from "react-native-bootsplash";

import AppStackNavigator from "./AppStackNavigator";

/**
 * Gets invoked when the NavigationContainer gets ready.
 */
const onNavigationContainerReady = () => {
	RNBootSplash.hide({
		fade: true,
	});
};

function RootNavigator() {
	const renderNavRoutes = (): React.ReactNode => {
		return <AppStackNavigator />;
	};

	return (
		<NavigationContainer onReady={onNavigationContainerReady}>
			{renderNavRoutes()}
		</NavigationContainer>
	);
}

export default RootNavigator;
