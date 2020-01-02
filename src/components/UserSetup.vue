<template>
  <main class="panel">
    <p class="panel-heading has-text-centered">Setup Device</p>

    <div class="panel-block columns is-marginless is-centered">
      <form
        class="column is-full-mobile is-four-fifths-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd"
      >
        <div class="field">
          <label class="label" for="wifi">Your wifi is</label>
          <div class="field is-grouped">
            <div v-if="isManualSetup" class="control is-expanded has-icons-left">
              <input id="wifi-input" class="input is-link" type="text" placeholder="Type me" />
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'wifi']" />
              </span>
            </div>
            <div v-else class="control is-expanded has-icons-left">
              <div class="select is-fullwidth is-info">
                <select id="wifi-select" name="wifi-net">
                  <option value="select-value">Select Wifi</option>
                  <option v-for="wifi in wifiNets" :key="wifi.id" value="wifi.id">{{wifi.name}}</option>
                </select>
              </div>
              <span class="icon is-small is-left">
                <font-awesome-icon :icon="['fas', 'wifi']" />
              </span>
            </div>

            <p class="control">
              <a
                v-if="isManualSetup"
                class="button is-info"
                @click="switchSetupMode(); requestWifiNetsFromApp();"
              >Scan</a>
              <a v-else class="button is-info" @click="switchSetupMode();">Manual</a>
            </p>
          </div>
        </div>

        <div class="field">
          <label class="label" for="password">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              id="password"
              class="input is-primary"
              :type="isPasswordHidden ? 'password' : 'text'"
              placeholder="********"
            />
            <span class="icon is-small is-left">
              <font-awesome-icon :icon="['fas', 'unlock-alt']" />
            </span>

            <span
              @click="changePasswordDisplay()"
              class="icon is-small is-right"
              style="pointer-events: initial"
            >
              <font-awesome-icon v-if="isPasswordHidden" :icon="['fas', 'eye']" />
              <font-awesome-icon v-else :icon="['fas', 'eye-slash']" />
            </span>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-link is-outlined is-fullwidth">Save setup</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "UserSetup",
  props: {
    wifiNets: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      isManualSetup: true,
      isPasswordHidden: true
    };
  },

  methods: {
    switchSetupMode() {
      this.isManualSetup = !this.isManualSetup;
    },
    changePasswordDisplay() {
      this.isPasswordHidden = !this.isPasswordHidden;
    },
    requestWifiNetsFromApp() {
      this.$emit("request-wifi-nets-from-app");
    }
  }
};
</script>

<style>
</style>
