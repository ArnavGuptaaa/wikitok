import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Post } from "@/types";
import { SaveCard } from "@/components/SaveCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Saved() {
	const [savedPosts, setSavedPosts] = useState<Post[] | undefined>();

	const getSavedPosts = async () => {
		// await AsyncStorage.setItem("saved-posts", JSON.stringify([]));
		try {
			const value = await AsyncStorage.getItem("saved-posts");

			if (value) {
				setSavedPosts(JSON.parse(value) as Post[]);
			}
		} catch (e) {
			throw new Error("Error loading posts");
		}
	};

	const handleDelete = async (id: number) => {
		console.log("CALLED", id);

		let postsToSave: Post[] = [];

		try {
			const value = await AsyncStorage.getItem("saved-posts");

			if (value) {
				const existingSavedPosts = JSON.parse(value) as Post[];

				postsToSave = existingSavedPosts.filter((post) => {
					console.log(post.pageId);
					return post.pageId !== id;
				});
			}

			setSavedPosts(postsToSave);

			await AsyncStorage.setItem(
				"saved-posts",
				JSON.stringify(postsToSave)
			);
		} catch (e) {
			throw new Error("Couldnt Save Post");
		}
	};

	useEffect(() => {
		// console.log("EFFEECTCTCT");

		getSavedPosts();
	}, []);

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
}

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
