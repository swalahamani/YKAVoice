import {Platform} from "react-native";

export const Platforms: {
	[key in typeof Platform.OS]: typeof Platform.OS;
} = Object.freeze({
	ios: "ios",
	android: "android",
	windows: "windows",
	macos: "macos",
	web: "web",
});
