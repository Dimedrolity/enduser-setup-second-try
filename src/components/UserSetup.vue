<template>
  <main>
    <nav class="panel">
      <p class="panel-heading has-text-centered">Setup Device</p>
      <br />

      <div class="columns is-centered">
        <div class="column is-4">
          <label class="label">Your wifi is</label>
          <div class="field is-grouped">
            <p v-if="isManualSetup" class="control is-expanded has-icons-left">
              <input class="input is-link" type="text" placeholder="Type me" />
              <span class="icon is-small is-left">
                <i class="fas fa-wifi"></i>
              </span>
            </p>
            <div v-else class="control is-expanded has-icons-left">
              <div class="select is-fullwidth is-info">
                <select name="wifi-net">
                  <option value="select-value">Select Wifi</option>
                  <option v-for="wifi in wifiNets" :key="wifi.id" value="wifi.id">{{wifi.name}}</option>
                </select>
              </div>
              <span class="icon is-small is-left">
                <i class="fas fa-wifi"></i>
              </span>
            </div>

            <p class="control">
              <a v-if="isManualSetup" class="button is-info" v-on:click="switchSetup()">Scan</a>
              <a v-else class="button is-info" v-on:click="switchSetup()">Manual</a>
            </p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-primary"
                :type="isPasswordHidden ? 'password' : 'text'"
                placeholder="********"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-unlock-alt"></i>
              </span>

              <span
                v-on:click="changePasswordDisplay()"
                class="icon is-small is-right"
                style="pointer-events: initial"
              >
                <i v-if="isPasswordHidden" class="fas fa-eye"></i>
                <i v-else class="fas fa-eye-slash"></i>
              </span>
            </div>
          </div>

          <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">Save setup</button>
          </div>
        </div>
      </div>
    </nav>
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
      isPasswordHidden: false
    };
  },

  methods: {
    switchSetup() {
      this.isManualSetup = this.isManualSetup ? false : true;
    },
    changePasswordDisplay() {
      this.isPasswordHidden = this.isPasswordHidden ? false : true;
    }
  }
};
</script>

<style>
</style>
