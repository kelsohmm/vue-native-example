<template>
  <map-view
    class="container"
    :initial-region="coordinates"
    :onPress="event => $emit('mapPressed')"
    :showsUserLocation="true"
  >
    <marker
      v-for="pin in pins"
      :key="pin"
      :coordinate="{ latitude: pin.latitude, longitude: pin.longitude }"
      :onPress="event => $emit('pinPressed')"
      :stopPropagation="true"
    >
      <image :source="MapMarker" :style="{ width: windowWidth/10, resizeMode: 'contain' }"></image>
    </marker>
  </map-view>
</template>

<script>
import MapView, { Marker } from "react-native-maps";
import MapMarker from "../../../assets/images/map-marker.png";
import { Dimensions } from "react-native";

export default {
  data() {
    const windowWidth = Dimensions.get("window").width;

    return {
      windowWidth,
      MapMarker,
      pins: [
        {latitude: 51.1281902, longitude: 16.9804904,}
      ],
      coordinates: {
        latitude: 51.1281902,
        longitude: 16.9804904,
        latitudeDelta: 0.01, // vertical zoom (how much degrees is shown)
        longitudeDelta: 0.005 // horizontal zoom (how much degrees is shown)
      }
    };
  },
  components: {
    MapView,
    Marker
  }
};
</script>
<style scoped>
.container {
  flex: 1;
}
</style>
