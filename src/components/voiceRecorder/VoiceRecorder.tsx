import React, {FC} from "react";

import {View} from "react-native";

import {useThemeAwareObject} from "styles/theming/ThemingHelper";
import IconLabel from "components/iconLabel";

import Styles from "./Styles";

interface iProps {}

export const VoiceRecorder: FC<iProps> = () => {
	const styles = useThemeAwareObject(Styles.createStyles);

	return (
		<View style={[styles.container]}>
			<IconLabel iconName="ri-record-circle-fill" label="Rec" />
		</View>
	);
};
