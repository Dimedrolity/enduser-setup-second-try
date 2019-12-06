<template>
  <div>
    <UserSetup :wifiNets="wifiNets"></UserSetup>
    <!-- нужно будет передать список wifi сетей компоненту UserSetup -->
  </div>
</template>

<script>
import UserSetup from "./components/UserSetup";

// читаем из json файла сети
let wifiNets = [
  { id: 0, name: "I am wifi" },
  { id: 1, name: "I am too" },
  { id: 2, name: "Subscribe to PewDiePie" },
  { id: 3, name: "Slavik007" }
];

export default {
  name: "app",
  components: {
    UserSetup
  },
  data() {
    return {
      wifiNets: wifiNets
    };
  }
};
</script>

<style>
</style>
