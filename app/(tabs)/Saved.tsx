import { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	GestureResponderEvent,
} from "react-native";
import { Post } from "@/types";
import { SaveCard } from "@/components/SaveCard";
import {
	getSavedPostsFromStorage,
	savePostsInStorage,
} from "@/utils/savePostUtils";
import { useIsFocused } from "@react-navigation/native";

export const Saved = () => {
	const [savedPosts, setSavedPosts] = useState<Post[]>([]);
	const isFocused = useIsFocused();

	const handleDelete = async (e: GestureResponderEvent, id: number) => {
		e.stopPropagation();

		let postsToSave: Post[] = [];

		const existingSavedPosts = (await getSavedPostsFromStorage()) ?? [];

		postsToSave = existingSavedPosts.filter((post) => post.pageId != id);

		setSavedPosts(postsToSave);
		await savePostsInStorage(postsToSave);
	};

	useEffect(() => {
		const getSavedPosts = async () => {
			const value = (await getSavedPostsFromStorage()) ?? [];
			setSavedPosts(value);
		};

		getSavedPosts();
	}, [isFocused]);

	return (
		<View style={styles.container}>
			<View style={styles.saveContainer}>
				<FlatList
					data={savedPosts}
					showsVerticalScrollIndicator={false}
					keyExtractor={(save) => save.pageId.toString()}
					renderItem={({ item }) => (
						<SaveCard save={item} handleDelete={handleDelete} />
					)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#000",
	},
	saveContainer: {
		marginTop: 120,
		padding: 20,
	},
});
