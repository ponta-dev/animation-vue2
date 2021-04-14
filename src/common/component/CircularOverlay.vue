<template>
    <v-overlay
        :value="overlay"
        v-if="overlay"
    >
        <v-progress-circular
            indeterminate
            :size="overlaySize"
        >
        </v-progress-circular>
    </v-overlay>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "CircularOverlay",
    props: {
        overlay: {
            type: Boolean,
            required: true
        },
        overlaySize: {
            type: Number,
            default: 64
        }
    }
})
</script>