<template>
    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click="toggleMenu">
        </v-app-bar-nav-icon>
        <v-toolbar-title>
            <strong>タイトル</strong>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span>
            ユーザ : {{getUser.userName}}
        </span>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension v-if="menuFlg">
            <v-tabs align-with-title>
                <v-tab
                    v-for="(val, i) in getMenu" :key="i"
                >
                    <strong>{{val.menuName}}</strong>
                </v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapGetters} from 'vuex'

export default Vue.extend({
    name: "Header",
    data() {
        return {
            menuFlg: false
        }
    },
    computed: {
        ...mapGetters([
            "getUser",
            "getMenu"
        ])
    },
    methods: {
        toggleMenu() {
            this.menuFlg = !this.menuFlg
        },
        routerPush(path: string) {
            this.$router.push(path)
        }
    }
})
</script>