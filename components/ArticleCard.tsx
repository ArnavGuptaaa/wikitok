import { Post } from "@/types";
import {
	View,
	StyleSheet,
	Text,
	ImageBackground,
	Linking,
	useColorScheme,
	ColorSchemeName,
} from "react-native";
import { IconButton } from "./IconButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import {
	getSavedPostsFromStorage,
	savePostsInStorage,
} from "@/utils/savePostUtils";
import { useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "@/constants/Colors";

export const ArticleCard: React.FC<{ post: Post }> = ({ post }) => {
	const [isSaved, setIsSaved] = useState<boolean>(false);
	const colorScheme = useColorScheme();
	const styles = getStyles(colorScheme);

	const savePost = async (post: Post) => {
		if (isSaved) {
			// Unsave Logic
			let savedPosts: Post[] | null = await getSavedPostsFromStorage();

			if (savedPosts) {
				savedPosts = savedPosts.filter(
					(save) => save.pageId != post.pageId
				);

				await savePostsInStorage(savedPosts);
			}
		} else {
			// Save Logic
			await savePostsInStorage(post);
		}

		setIsSaved((prev) => !prev);
	};

	return (
		<ImageBackground
			source={{ uri: post.thumbnailUrl }}
			resizeMode="cover"
			style={styles.backImage}
		>
			<View style={styles.innerContainer}>
				<View style={styles.infoContainer}>
					<Text style={styles.title}>{post.title}</Text>

					<View style={styles.buttonGroup}>
						<IconButton
							icon={
								<FontAwesome
									name={isSaved ? "bookmark" : "bookmark-o"}
									size={30}
									color={isSaved ? "#af9ecc" : "#919093"}
								/>
							}
							onPress={() => savePost(post)}
							styleProp={styles.button}
						/>
						<IconButton
							icon={
								<Entypo name="news" size={30} color="#919093" />
							}
							onPress={() => Linking.openURL(post.wikiUrl)}
							styleProp={styles.button}
						/>
					</View>
					<Text style={styles.subText} numberOfLines={10}>
						{post.extract}
					</Text>
				</View>
			</View>
		</ImageBackground>
	);
};

const getStyles = (theme: ColorSchemeName) => {
	return StyleSheet.create({
		backImage: {
			height: 769,
		},
		innerContainer: {
			flex: 1,
			backgroundColor: "rgba(0,0,0, 0.7)",
		},
		infoContainer: {
			flex: 1,
			paddingHorizontal: 15,
			marginBottom: 20,
		},
		title: {
			fontWeight: "bold",
			fontSize: 40,
			color: theme === "light" ? LIGHT_THEME.TITLE : DARK_THEME.TITLE,
			marginTop: 120,
		},
		subText: {
			fontSize: 18,
			color: theme === "light" ? LIGHT_THEME.TEXT : DARK_THEME.TEXT,
			textAlign: "justify",
		},
		buttonGroup: {
			marginTop: "auto",
			flexDirection: "row",
			justifyContent: "flex-end",
			marginBottom: 20,
		},
		button: {
			width: "auto",
			marginLeft: 20,
			padding: 10,
		},
	});
};
