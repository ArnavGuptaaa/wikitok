import { ReactNode } from "react";
import {
	GestureResponderEvent,
	StyleProp,
	TouchableOpacity,
	ViewStyle,
	View,
} from "react-native";

export const IconButton: React.FC<{
	icon: ReactNode;
	onPress: (event: GestureResponderEvent) => void;
	styleProp: StyleProp<ViewStyle>;
}> = ({ icon, onPress, styleProp }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styleProp}>
			<View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
				{icon}
			</View>
		</TouchableOpacity>
	);
};
