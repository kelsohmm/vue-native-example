<template>
  <nb-container>
    <web-view
      :source="{
        uri: 'https://horyzont.eu'
      }"
    ></web-view>
  </nb-container>
</template>

<script>
import { WebView } from "react-native-webview";

export default {
  components: {
    WebView
  },
  props: {
    navigation: {
      type: Object
    }
  }
};
</script>
<style scoped>
</style>
