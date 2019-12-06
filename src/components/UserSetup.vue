<template>
  <main class="panel">
    <p class="panel-heading has-text-centered">Setup Device</p>
    <br />

    <div class="columns is-marginless is-mobile is-centered">
      <form
        class="column is-full-mobile is-four-fifths-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd"
      >
        <div class="field">
          <label class="label" for="wifi">Your wifi is</label>
          <div class="field is-grouped">
            <div v-if="isManualSetup" class="control is-expanded has-icons-left">
              <input id="wifi" class="input is-link" type="text" placeholder="Type me" />
              <span class="icon is-small is-left">
                <i class="fas fa-wifi"></i>
              </span>
            </div>
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

        <div class="field">
          <button class="button is-link is-outlined is-fullwidth">Save setup</button>
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
