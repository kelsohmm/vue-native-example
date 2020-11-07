<template>
  <view class="overlay">
    <activity-indicator size="large"></activity-indicator>
  </view>
</template>

<script>
export default {
  name: "spinnerOverlay",
  data() {
    return {};
  }
};
</script>

<style scoped>
.overlay {
  flex: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>