<template>
  <div>
    <UserSetup :wifiNets="wifiNets" @request-wifi-nets-from-app="loadNetworksFromJson()"></UserSetup>
  </div>
</template>

<script>
import UserSetup from "./components/UserSetup";
import { networkInterfaces } from "os";
// import networks from "../api/networks.json";

// let wifiNets = [
//   {
//     id: 1,
//     name: "I am wifi"
//   }
// ];

export default {
  name: "app",
  components: {
    UserSetup
  },
  data() {
    return {
      wifiNets: []
    };
  },
  methods: {
    async loadNetworksFromJson() {
      const networkModule = await import("../api/networks.json");
      const networks = networkModule.wifiNets;
      const networksWithID = [networks.length];

      for (let i = 0; i < networks.length; i++) {
        networksWithID[i] = { name: networks[i].name, id: i };
      }

      this.wifiNets = networksWithID;
    }
  }
};
</script>

<style>
</style>
