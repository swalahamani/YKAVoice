module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./src"],
				extensions: [
					".ios.js",
					".android.js",
					".js",
					".ts",
					".jsx",
					".tsx",
					".json",
				],
				alias: {
					tests: ["./__tests__/"],
					"@assets": "./src/assets",
					"@config": "./src/config",
					"@navigation": "./src/navigation",
					"@screens": "./src/screens",
					"@services": "./src/services",
					"@store": "./src/store",
					"@styles": "./src/styles",
					"@components": "./src/components",
					"@utils": "./src/utils",
				},
			},
		],
	],
};
