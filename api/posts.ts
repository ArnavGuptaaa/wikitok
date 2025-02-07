import { Post } from "@/types";
import { createUrl } from "@/utils/createUrl";

export const fetchPosts = async (): Promise<Post[]> => {
	const BASE_URL = "https://en.wikipedia.org/w/api.php";
	const params: Record<string, string> = {
		action: "query",
		format: "json",
		generator: "random",
		grnnamespace: "0",
		prop: "extracts|pageimages|info",
		inprop: "url",
		grnlimit: "20",
		exintro: "1",
		exlimit: "max",
		exsentences: "5",
		explaintext: "1",
		piprop: "thumbnail",
		pithumbsize: "400",
		origin: "*",
	};

	const url = createUrl(BASE_URL, params);

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error("Failed to fetch posts");
		}

		const data = await res.json();

		const posts: Post[] = Object.values(data.query.pages)
			.map((page: any) => ({
				pageId: page.pageid,
				title: page.title,
				thumbnailUrl: page.thumbnail?.source || "",
				extract: page.extract,
				wikiUrl: page.fullurl,
			}))
			.filter(
				(post: Post) => post.title && post.thumbnailUrl && post.extract
			);

		return posts;
	} catch (error) {
		throw new Error("Failed to fetch posts");
	}
};
