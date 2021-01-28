<template>
  <div id="app">
    aaa
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import log from 'loglevel'

export default Vue.extend({
  name: 'App',
  components: {

  },
  data() {
    return {
      
    }
  },
  created: async function() {
    log.debug("App.vue created")
  }
})
</script>