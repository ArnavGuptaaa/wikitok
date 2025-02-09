import { Image } from "expo-image";
import {
	View,
	Text,
	StyleSheet,
	Linking,
	TouchableOpacity,
	GestureResponderEvent,
	ColorSchemeName,
	useColorScheme,
} from "react-native";
import { Post } from "@/types";
import { Entypo } from "@expo/vector-icons";
import { DARK_THEME, LIGHT_THEME } from "@/constants/Colors";

export const SaveCard: React.FC<{
	save: Post;
	handleDelete: (e: GestureResponderEvent, pageId: number) => void;
}> = ({ save, handleDelete }) => {
	const colorScheme = useColorScheme();
	const styles = getStyles(colorScheme);

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

const getStyles = (theme: ColorSchemeName) => {
	return StyleSheet.create({
		container: {
			width: 353,
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 20,
			borderWidth: 1,
			borderRadius: 10,
			borderColor:
				theme === "light" ? LIGHT_THEME.MUTED : DARK_THEME.MUTED,
			overflow: "hidden",
			backgroundColor:
				theme === "light"
					? LIGHT_THEME.BACKGROUND
					: DARK_THEME.BACKGROUND,
		},
		thumbnail: {
			width: 80,
			height: 80,
		},
		title: {
			fontWeight: "bold",
			fontSize: 20,
			color:
				theme === "light" ? LIGHT_THEME.SAVED_TEXT : DARK_THEME.TITLE,
			marginLeft: 10,
			width: 200,
		},
		delete: {
			position: "absolute",
			right: 20,
		},
	});
};
