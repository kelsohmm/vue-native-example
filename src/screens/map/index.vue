<template>
  <nb-container>
    <map-view
      @pinPressed="pinPressed"
    />
    <nb-button
      transparent
      class="drawer-bar-icon"
      :onPress="() => this.props.navigation.toggleDrawer()"
    >
      <image :source="BarIcon" :style="{ width: 30, height: 30 }" />
    </nb-button>
  </nb-container>
</template>

<script>
import BarIcon from "../../../assets/images/icon-bar.png";
import MapView from "./mapView";
import { Alert } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { getDistance } from "geolib";

export default {
  components: {
    MapView
  },
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return { BarIcon };
  },
  mounted() {
    this.getLocationAsync();
  },
  methods: {
    async getLocationAsync() {
      let { status } = await Permissions.getAsync(Permissions.LOCATION);
      if (status !== "granted") {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
          return null;
        }
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest
      });
      return location.coords;
    },
    async pinPressed() {
      Alert.alert("Witamy na uczelni Horyzont", "Super!");
    }
  }
};
</script>
<style scoped>
.drawer-bar-icon {
  top: 50;
  left: 30;
  position: absolute;
}
</style>
