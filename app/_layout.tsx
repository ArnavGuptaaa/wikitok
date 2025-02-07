import { Stack } from "expo-router";
import "react-native-reanimated";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	// useEffect(() => {
	// 	if (loaded) {
	// 		SplashScreen.hideAsync();
	// 	}
	// }, [loaded]);

	// if (!loaded) {
	// 	return null;
	// }

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
}
