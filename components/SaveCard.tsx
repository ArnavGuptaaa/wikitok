import { Image } from "expo-image";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Post } from "@/types";

export const SaveCard: React.FC<{
	save: Post;
	handleDelete: (pageId: number) => void;
}> = ({ save, handleDelete }) => {
	return (
		<TouchableOpacity onPress={() => handleDelete(save.pageId)}>
			<View style={styles.container}>
				<Image
					style={styles.thumbnail}
					source={save.thumbnailUrl}
					contentFit="cover"
					transition={1000}
				/>
				<Text numberOfLines={1} style={styles.title}>
					{save.title}
				</Text>
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
	},
});
