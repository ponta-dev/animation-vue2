<template>
    <v-card>
        <v-card-title class="primary white--text">primary</v-card-title>
        <v-card-subtitle class="secondary">secondary</v-card-subtitle>
        <v-card-text>
            default
            <v-alert color="success">success</v-alert>
            <v-alert color="error">error</v-alert>
            <v-alert color="info">info</v-alert>
            <v-alert color="warning">warning</v-alert>
        </v-card-text>
        <v-card-actions><v-spacer></v-spacer><v-btn class="accent"><v-icon>mdi-check</v-icon>accent</v-btn></v-card-actions>
    </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "SampleThemeCard"
})
</script>