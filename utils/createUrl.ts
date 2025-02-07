export const createUrl = (BASE_URL: string, params: Record<string, string>) => {
	const paramString: string = Object.entries(params)
		.map(([key, value]) => `${encodeURI(key)}=${encodeURI(value)}`)
		.join("&");

	return `${BASE_URL}?${paramString}`;
};
