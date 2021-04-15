<template>
    <v-app>
        <v-row v-if="!overlay">
            <frame-header>
            </frame-header>
            <v-main>
                <router-view></router-view>
            </v-main>
            <frame-footer>
            </frame-footer>
        </v-row>
        <circular-overlay
            :overlay="overlay"
        >
        </circular-overlay>
    </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import log from 'loglevel'
import FrameHeader from './Header.vue'
import FrameFooter from './Footer.vue'
import CircularOverlay from '@/common/component/CircularOverlay.vue'

export default Vue.extend({
    name: 'Layout',
    components: {
        FrameHeader,
        FrameFooter,
        CircularOverlay
    },
    data() {
        return {
            overlay: true,
        }
    },
    created: function() {
        log.debug("created Layout.vue")
        this.$store.dispatch("loginAction")
        .finally(() => this.overlay = false)
    },
})
</script>