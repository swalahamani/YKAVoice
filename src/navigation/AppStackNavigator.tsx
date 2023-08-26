import React from "react";

import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import HomeScreen from "@screens/homeScreen";

import {AppRouteStackParamList} from "@config/types/NavTypes";

import Colors from "styles/Colors";

const AppStack = createStackNavigator<AppRouteStackParamList>();

function AppStackNavigator() {
	return (
		<AppStack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.TAMARILLO,
				},

				headerTintColor: Colors.WHITE,

				headerTitleStyle: {
					fontWeight: "bold",
				},

				...TransitionPresets.SlideFromRightIOS,
			}}
		>
			<AppStack.Screen
				name="HomeScreen"
				options={{title: "YKA Voice 🎙️"}}
				component={HomeScreen}
			/>
		</AppStack.Navigator>
	);
}

export default AppStackNavigator;
