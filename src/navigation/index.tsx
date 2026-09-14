import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationType } from "../types/navigationType";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "../screens/loginPage";
import { RegisterPage } from "../screens/registerPage";

const Stack = createNativeStackNavigator<NavigationType>();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>

				<Stack.Screen name="Login" component={LoginPage} />

				<Stack.Screen name="Register" component={RegisterPage} />

			</Stack.Navigator>
		</NavigationContainer>
	);
};
