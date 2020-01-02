<template>
  <div>
    <UserSetup :wifiNets="wifiNets" @request-wifi-nets-from-app="loadNetworksFromJson()"></UserSetup>
  </div>
</template>

<script>
import UserSetup from "./components/UserSetup";

let wifiNets = [
  {
    id: 1,
    name: "I am wifi"
  }
];

export default {
  name: "app",
  components: {
    UserSetup
  },
  data() {
    return {
      // wifiNets: []
      wifiNets: wifiNets
    };
  },
  methods: {
    // async loadNetworksFromJson() {
    //   const networksModule = await import('./networks.json');
    //   const networks = networksModule.wifiNets;
    //   const networksWithID = [networks.length];
    //   for (let i = 0; i < networks.length; i++) {
    //     networksWithID[i] = { name: networks[i].name, id: i };
    //   }
    //   this.wifiNets = networksWithID;
  }
};
</script>

<style>
</style>
