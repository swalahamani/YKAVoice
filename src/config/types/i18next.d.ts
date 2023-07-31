/* eslint-disable @typescript-eslint/naming-convention */
import "i18next";

declare module "i18next" {
	export type ResourceKey =
		| string
		| {
				[key: string]: any;
		  };

	export interface ResourceLanguage {
		[namespace: string]: ResourceKey;
	}

	export interface Resource {
		[language: string]: ResourceLanguage;
	}
}
