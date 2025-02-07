import { ReactNode } from "react";
import {
	GestureResponderEvent,
	StyleProp,
	TouchableOpacity,
	ViewStyle,
	Text,
	View,
} from "react-native";

export const IconButton: React.FC<{
	icon: ReactNode;
	label: string;
	onPress: (event: GestureResponderEvent) => void;
	styleProp: StyleProp<ViewStyle>;
}> = ({ icon, label, onPress, styleProp }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styleProp}>
			<View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
				{icon}
				{/* <Text
					style={{
						color: "#fff",
						marginLeft: 10,
						fontWeight: "bold",
					}}
				>
					{label}
				</Text> */}
			</View>
		</TouchableOpacity>
	);
};
