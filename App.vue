<template>
  <setup></setup>
</template>

<script>
import Setup from "./src/boot/setup.vue";
import getConfig from "./src/config.js";

export default {
  components: { Setup },
  data() {
    console.log(`Env NODE_ENV=${process.env.NODE_ENV}`);
    const config = getConfig(process.env.NODE_ENV);
    return {
      config,
    };
  },
  methods: {
    overwriteConfig(envType) {
      console.log(`!!!!! Overwriting config to: ${envType}`);
      this.config = getConfig(envType);
    }
  }
};
</script>
