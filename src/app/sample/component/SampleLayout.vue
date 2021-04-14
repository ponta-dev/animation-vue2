<template>
    <v-row>
        <v-col cols="6">
            <sample-theme-card>
            </sample-theme-card>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import SampleThemeCard from './SampleThemeCard.vue'

export default Vue.extend({
    name: 'SampleLayout',
    components: {
        SampleThemeCard
    }
})
</script>