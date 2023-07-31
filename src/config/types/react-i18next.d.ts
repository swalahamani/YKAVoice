/* eslint-disable @typescript-eslint/naming-convention */
/**
 * This configuration has been done by referring the following resources:
 * 1. https://dev.to/ramonak/react-native-internationalization-with-i18next-568n
 * 2. https://github.com/i18next/react-i18next/issues/1417#issuecomment-985382210
 * 3. https://react.i18next.com/latest/typescript
 */
import "react-i18next";

import {en} from "@assets/translations";

declare module "react-i18next" {
	interface CustomTypeOptions {
		defaultNS: "translation";
		resources: {
			translation: typeof en;
		};
	}
}
