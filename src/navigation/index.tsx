import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../features/auth/AuthContext";
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
import { EditPage } from "../screens/userPage/editPage";
import { AddressPage } from "../screens/userPage/addressPage";
import {AddressPageAdd} from "../screens/userPage/addressPageAdd";

import { HospitalProfilePage } from "../screens/medupFlow/HospitalProfilePage";
import { HospitalReviewsPage } from "../screens/medupFlow/HospitalReviewsPage";
import { HospitalRatingPage } from "../screens/medupFlow/HospitalRatingPage";
import { ReviewReportPage } from "../screens/medupFlow/ReviewReportPage";
import { InsurancePlansPage } from "../screens/medupFlow/InsurancePlansPage";
import { InsuranceHospitalsPage } from "../screens/medupFlow/InsuranceHospitalsPage";
import { FavoritesPage } from "../screens/medupFlow/FavoritesPage";

import { ReviewDetailsPage } from "../screens/medupFlow/ReviewDetailsPage";

const Stack = createNativeStackNavigator<NavigationType>();

export const Routes = () => {
  const { user, initializing } = useAuth();
  if (initializing) return null;
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={user ? "HomePage" : "Login"} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={LoginPage} />

				<Stack.Screen name="Register" component={RegisterPage} />

				<Stack.Screen name="RecoveryPassword" component={PasswordRecovery} />

				<Stack.Screen name="VerifyAccount" component={VerificationPage} />

				<Stack.Screen name="NewPassword" component={NewPasswordScreen} />

				<Stack.Screen name="HomePage" component={HomePage} />

				<Stack.Screen name="SearchPage" component={SearchPage} />

				<Stack.Screen name="UserPage" component={UserPage} />

				<Stack.Screen name="EditPage" component={EditPage} />

				<Stack.Screen name="AddressPage" component={AddressPage} />

				<Stack.Screen name={"AddressPageAdd"} component={AddressPageAdd}/>

        <Stack.Screen name="HospitalProfile" component={HospitalProfilePage} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetailsPage} />
        <Stack.Screen name="HospitalReviews" component={HospitalReviewsPage} />
        <Stack.Screen name="HospitalRating" component={HospitalRatingPage} />
        <Stack.Screen name="ReviewReport" component={ReviewReportPage} />
        <Stack.Screen name="InsurancePlans" component={InsurancePlansPage} />
        <Stack.Screen name="InsuranceHospitals" component={InsuranceHospitalsPage} />
        <Stack.Screen name="FavoritesPage" component={FavoritesPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
