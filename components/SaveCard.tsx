import { Image } from "expo-image";
import {
	View,
	Text,
	StyleSheet,
	Linking,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";
import { Post } from "@/types";
import { Entypo } from "@expo/vector-icons";

export const SaveCard: React.FC<{
	save: Post;
	handleDelete: (e: GestureResponderEvent, pageId: number) => void;
}> = ({ save, handleDelete }) => {
	return (
		<TouchableOpacity onPress={() => Linking.openURL(save.wikiUrl)}>
			<View style={styles.container}>
				<Image
					style={styles.thumbnail}
					source={save.thumbnailUrl}
					contentFit="cover"
					transition={1000}
				/>
				<Text
					numberOfLines={2}
					ellipsizeMode="tail"
					style={styles.title}
				>
					{save.title}
				</Text>
				<TouchableOpacity
					onPress={(e) => handleDelete(e, save.pageId)}
					style={styles.delete}
				>
					<Entypo name="cross" color={"#919093"} size={35} />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 353,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#3f3f3f",
		overflow: "hidden",
		backgroundColor: "#121212",
	},
	thumbnail: {
		width: 80,
		height: 80,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#e0e0e0",
		marginLeft: 10,
		width: 200,
	},
	delete: {
		position: "absolute",
		right: 20,
	},
});
