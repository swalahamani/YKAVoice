import {Platform, NativeModules} from "react-native";

import {LanguageDetectorModule} from "i18next";

import {Platforms} from "@config/constants/GenericReactNativeConstants";

/**
 * This is heavily inspired by
 * https://gitlab.com/os-team/libs/utils/-/blob/master/packages/i18next-react-native-language-detector/src/index.ts
 */
const LanguageDetectorPlugin: LanguageDetectorModule = {
	type: "languageDetector",
	init: () => {},
	detect: () => {
		let locale = null;

		if (Platform.OS === Platforms.ios) {
			locale =
				NativeModules.SettingsManager.settings.AppleLocale ||
				NativeModules.SettingsManager.settings.AppleLanguages[0];
		} else {
			locale = NativeModules.I18nManager.localeIdentifier;
		}

		return locale.split("_")[0];
	},
	cacheUserLanguage: () => {},
};

export default LanguageDetectorPlugin;
