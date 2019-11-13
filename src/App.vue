<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
    <UserSetup :wifiNets="wifiNets"></UserSetup>
    <!-- нужно будет передать список wifi сетей компоненту UserSetup -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import UserSetup from "./components/UserSetup";

let wifiNets = [
  { id: 0, name: "I am wifi" },
  { id: 1, name: "I am too" },
  { id: 2, name: "Subscribe to PewDiePie" },
  { id: 3, name: "Slavik007" }
];

export default {
  name: "app",
  components: {
    HelloWorld,
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
