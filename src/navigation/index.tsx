import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { VerificationPage } from "../screens/accountVerificationPage";
import { HomePage } from "../screens/homePage";
import { LoginPage } from "../screens/loginPage";
import { NewPasswordScreen } from "../screens/newPasswordScreen";
import { PasswordRecovery } from "../screens/passwordRecoveryPage";
import { RegisterPage } from "../screens/registerPage";
import { SearchPage } from "../screens/searchPage";
import { UserPage } from "../screens/userPage";
import type { NavigationType } from "../types/navigationType";

const Stack = createNativeStackNavigator<NavigationType>();

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={LoginPage} />

				<Stack.Screen name="Register" component={RegisterPage} />

				<Stack.Screen name="RecoveryPassword" component={PasswordRecovery} />

				<Stack.Screen name="VerifyAccount" component={VerificationPage} />

				<Stack.Screen name="NewPassword" component={NewPasswordScreen} />

				<Stack.Screen name="HomePage" component={HomePage} />

				<Stack.Screen name="SearchPage" component={SearchPage} />

				<Stack.Screen name="UserPage" component={UserPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
