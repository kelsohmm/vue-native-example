<template>
  <nb-container>
    <web-view
      :source="{
        uri: 'https://horyzont.eu'
      }"
    ></web-view>
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
import { WebView } from "react-native-webview";

export default {
  components: {
    WebView
  },
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return { BarIcon };
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
