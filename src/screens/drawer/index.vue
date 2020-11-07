<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper" :bounces="false">
      <nb-list>
        <nb-list-item
          v-for="data in datas"
          :key="data.route"
          button
          noBorder
          :onPress="() => handleListItemClick(data.route)"
        >
          <nb-left>
            <nb-icon
              active
              :name="data.icon"
              :style="{ color: '#777', fontSize: 26, width: 30 }"
            />
            <nb-text> {{ data.name }} </nb-text>
          </nb-left>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Alert } from "react-native";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      datas: [
        {
          name: "Mapa",
          route: "Map",
          icon: "home"
        },
        {
          name: "Strona",
          route: "Web",
          icon: "globe"
        }
      ]
    };
  },
  methods: {
    handleListItemClick(route) {
      this.navigation.navigate(route);
    }
  }
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
}
.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  margin-bottom: 10;
}
.drawer-image {
  align-self: center;
  position: absolute;
  height: 75;
  width: 210;
}
.list-item-badge-container {
  border-radius: 3;
  height: 25;
  width: 72;
}
.list-item-badge-text {
  /* font-weight: 400; // not-working  */
  /* font-weight: bold; // working */
  text-align: center;
}
</style>
