<template>
  <div name="root">
    <layout>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from './app/frame/component/Layout.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Layout
  }
});
</script>
