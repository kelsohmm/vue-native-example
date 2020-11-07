<template>
  <nb-container class="container">
    <nb-form>
      <nb-item>
        <nb-input :placeholder="'Imię i nazwisko'" v-model="name"></nb-input>
      </nb-item>
      <nb-item>
        <nb-input :placeholder="'Tekst do wyswietlenia'" v-model="displayText"></nb-input>
      </nb-item>
    </nb-form>
    <nb-button blocks info :onPress="alertText">
      <nb-text>Wyswietl alert z moim tekstem!</nb-text>
    </nb-button>
  </nb-container>
</template>
<script>
import { Alert } from "react-native";

export default {
  components: {},
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      name: "",
      displayText: ""
    };
  },
  methods: {
      alertText() {
          Alert.alert('Kliknales guzik!', `Imie: ${this.name} \nTekst: ${this.displayText}`)
      }
  }
};
</script>
<style scoped>
.container {
  top: 50;
}
</style>
