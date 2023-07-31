/**
 * This configuration has been done by referring the following resources:
 * 1. https://dev.to/ramonak/react-native-internationalization-with-i18next-568n
 * 2. https://github.com/i18next/react-i18next/issues/1417#issuecomment-985382210
 * 3. https://react.i18next.com/latest/typescript
 */
import i18n, {Resource} from "i18next";
import {initReactI18next} from "react-i18next";

import LanguageDetectorPlugin from "@utils/LocalizationUtil";

import {en} from "@assets/translations";

const resources: Resource = {
	en: {
		translation: en,
	},
} as const;

i18n.use(initReactI18next).use(LanguageDetectorPlugin).init({
	resources,

	//language to use if translations in user language are not available
	fallbackLng: "en",

	/*
		Please refer: https://github.com/i18next/i18next/issues/1671#issuecomment-1001024085
	*/
	compatibilityJSON: "v3",

	defaultNS: "translation",
});

export default i18n;
