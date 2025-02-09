import { fetchPosts } from "@/api/posts";
import { Post } from "@/types";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ArticleCard } from "@/components/ArticleCard";

export default function Feed() {
	const [posts, setPosts] = useState<Post[]>();
	useEffect(() => {
		const fetchPostsAsync = async () => {
			setPosts(await fetchPosts());
		};

		fetchPostsAsync();
	}, []);

	const handleEndReached = async () => {
		const newData = await fetchPosts();

		setPosts((prev: Post[] | undefined) => [...(prev || []), ...newData]);
	};

	return (
		<FlatList
			data={posts}
			pagingEnabled
			onEndReachedThreshold={2}
			onEndReached={handleEndReached}
			showsVerticalScrollIndicator={false}
			keyExtractor={(post) => post.pageId.toString()}
			renderItem={({ item }) => <ArticleCard post={item} />}
		/>
	);
}
