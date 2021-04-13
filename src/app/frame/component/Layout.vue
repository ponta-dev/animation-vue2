<template>
    <v-app>
        <v-row v-if="!overlay">
            <v-app-bar app color="primary">
            </v-app-bar>
            <v-main>
                <v-container>
                    userName: {{}}
                    <v-card>
                        <v-card-title class="primary white--text">aaa</v-card-title>
                        <v-card-subtitle class="secondary">aaaaa</v-card-subtitle>
                        <v-card-text>
                            aaaaa
                            <v-alert color="success">success</v-alert>
                            <v-alert color="error">error</v-alert>
                            <v-alert color="info">info</v-alert>
                            <v-alert color="warning">warning</v-alert>
                        </v-card-text>
                        <v-card-actions><v-spacer></v-spacer><v-btn class="accent"><v-icon>mdi-check</v-icon>accent</v-btn></v-card-actions>
                    </v-card>
                </v-container>
            </v-main>
            <v-footer app>
            </v-footer>
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