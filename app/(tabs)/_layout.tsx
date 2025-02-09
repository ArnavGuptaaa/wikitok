import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { TAB_ONE_LABEL, TAB_TWO_LABEL } from "@/constants/Labels";
import { useColorScheme } from "react-native";
import { DARK_THEME, LIGHT_THEME } from "@/constants/Colors";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={25} style={{ marginBottom: -5 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarLabelStyle: { marginTop: 5 },
				tabBarStyle: {
					backgroundColor:
						colorScheme === "light"
							? LIGHT_THEME.BACKGROUND
							: DARK_THEME.BACKGROUND,
					borderTopWidth: 0,
					borderTopColor: "transparent",
				},
				tabBarActiveTintColor:
					colorScheme === "light"
						? LIGHT_THEME.ACCENT
						: DARK_THEME.ACCENT,
				tabBarInactiveTintColor:
					colorScheme === "light"
						? LIGHT_THEME.MUTED
						: DARK_THEME.MUTED,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: true,
					headerTransparent: true,
					headerTitleAlign: "left",
					headerTitleStyle: {
						color:
							colorScheme === "light"
								? LIGHT_THEME.ACCENT
								: DARK_THEME.ACCENT,
						fontWeight: "bold",
						fontSize: 40,
						height: 50,
					},
					title: TAB_ONE_LABEL,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="newspaper-o" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Saved"
				options={{
					headerShown: true,
					headerTransparent: true,
					headerTitleAlign: "left",
					headerTitleStyle: {
						color:
							colorScheme === "light"
								? LIGHT_THEME.ACCENT
								: DARK_THEME.ACCENT,
						fontWeight: "bold",
						fontSize: 40,
						height: 50,
					},
					title: TAB_TWO_LABEL,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="bookmark-o" color={color} />
					),
				}}
				// listeners={({ navigation }) => ({
				// 	tabPress: (e) => {},
				// })}
			/>
		</Tabs>
	);
}
