import React from "react";

import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import HomeScreen from "@screens/homeScreen";

import {AppRouteStackParamList} from "@config/types/NavTypes";

const AppStack = createStackNavigator<AppRouteStackParamList>();

function AppStackNavigator() {
	return (
		<AppStack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS,
			}}
		>
			<AppStack.Screen name="HomeScreen" component={HomeScreen} />
		</AppStack.Navigator>
	);
}

export default AppStackNavigator;
