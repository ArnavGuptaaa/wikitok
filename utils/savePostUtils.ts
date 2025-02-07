import { Post } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSavedPostsFromStorage = async () => {
	const value: string | null = await AsyncStorage.getItem("saved-posts");

	if (value === null) {
		return null;
	}

	return JSON.parse(value) as Post[];
};

export const savePostsInStorage = async (data: Post[] | Post) => {
	let dataToSave;

	let existingPosts = (await getSavedPostsFromStorage()) ?? [];

	if (data instanceof Array) {
		dataToSave = data;
	} else {
		dataToSave = [data, ...existingPosts];
	}

	await AsyncStorage.setItem("saved-posts", JSON.stringify(dataToSave));
};

export const deleteAllSavedPosts = async () => {
	await AsyncStorage.removeItem("saved-posts");
};
