<template>
    <v-app>
        <v-row v-if="!overlay">
            <v-app-bar app>
            </v-app-bar>
            <v-content>
                <v-container>
                    userName: {{}}
                </v-container>
            </v-content>
        </v-row>
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
    </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import log from 'loglevel'

export default Vue.extend({
    name: 'Layout',
    components: {
        
    },
    data() {
        return {
            overlay: true,
            overlaySize: 64
        }
    },
    created: function() {
        log.debug("created Layout.vue")
        this.$store.dispatch("loginAction")
        .finally(() => this.overlay = false)
    }
})
</script>