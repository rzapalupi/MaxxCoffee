import React, { Component } from "react";
import Store from "./src/store/store";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { LandingPage, LoginPage, SplashScreen } from "./src/views/login";
import { Home, Menu, } from "./src/views/home";

global.baseURL = "http://maxxapi.technopartner.rocks"

const RouterLogin = createStackNavigator(
	{
		SplashScreen: SplashScreen,
		LandingPage: LandingPage,
		LoginPage: LoginPage,
	},
	{
		initialRouteName: "SplashScreen",
		headerMode: "none"
	}
);

const RouterHome = createStackNavigator(
	{
		Home: Home,
		Menu: Menu,
	},
	{
		headerMode: "none"
	}
);

const RouterApp = createStackNavigator(
	{
		RouterLogin: RouterLogin,
		RouterHome: RouterHome,
	},
	{
		initialRouteName: "RouterLogin",
		headerMode: "none"
	}
);

const AppContainer = createAppContainer(RouterApp);

export default class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<AppContainer />
			</Provider>
		);
	}
}
