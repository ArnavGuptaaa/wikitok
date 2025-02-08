import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { TAB_ONE_LABEL, TAB_TWO_LABEL } from "@/constants/Labels";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={25} style={{ marginBottom: -5 }} {...props} />;
}

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarLabelStyle: { marginTop: 5 },
				tabBarStyle: {
					backgroundColor: "#121212",
					borderTopWidth: 0,
					borderTopColor: "transparent",
				},
				tabBarActiveTintColor: "#af9ecc",
				tabBarInactiveTintColor: "#3f3f3f",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: true,
					headerTransparent: true,
					headerTitleAlign: "left",
					headerTitleStyle: {
						color: "#af9ecc",
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
						color: "#af9ecc",
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
