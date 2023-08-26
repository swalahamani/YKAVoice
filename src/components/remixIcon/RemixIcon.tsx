/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Aug 08 2021
 *  File : RemixIcon.tsx
 *******************************************/
import {createIconSet} from "react-native-vector-icons";

import RemixIconGlyphMap from "@assets/glyphmaps/remixicon.glyph.json";

const RemixIcon = createIconSet(
	RemixIconGlyphMap,
	"remixicon",
	"remixicon.ttf",
);

export default RemixIcon;
