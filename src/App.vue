<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
import { Root } from "native-base";

import MapScreen from "./screens/map";
import WebScreen from "./screens/web";
import DrawerScreen from "./screens/drawer";

const MapNavigator = createDrawerNavigator(
  {
    Map: { screen: MapScreen },
    Web: { screen: WebScreen },
  },
  {
    initialRouteName: "Map",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: DrawerScreen
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Map: { screen: MapNavigator },
    },
    {
      initialRouteName: "Map",
      headerMode: "none"
    }
  )
);

export default {
  components: { Root, AppNavigation }
};
</script>
