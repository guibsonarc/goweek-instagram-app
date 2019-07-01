import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Feed from "./pages/Feed";
import New from "./pages/New";

import logo from "./assets/logo.png";
import back from "./assets/back.png";

export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      New
    },
    {
      defaultNavigationOptions: {
        headerBackImage: <Image style={{ margin: 5 }} source={back} />,
        headerTintColor: "#000",
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
        headerBackTitle: null
      },
      mode: "modal"
    }
  )
);
