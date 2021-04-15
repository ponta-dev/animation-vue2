import { FrameActions, FrameGetters, FrameModule, FrameMutations, FrameState } from "./mixin";
import timer from '@/common/util/timer'
import { DATA_USER } from "../data/user-data";
import { DATA_MENU } from "../data/menu-data";


const state: FrameState = {
    user: {
        userId: '',
        userName: ''
    },
    menu: []
}

const mutations: FrameMutations = {
    setUser(state, user) {
        state.user = user
    },
    setMenu(state, menu) {
        state.menu = menu
    }
}

const actions: FrameActions = {
    async loginAction(context) {
        await timer.sleepCount()
        context.commit('setUser', DATA_USER)
        context.commit('setMenu', DATA_MENU)
    }
}

const getters: FrameGetters = {
    getUser(state) {
        return state.user
    },
    getMenu(state) {
        return state.menu
    }
}

export const FRAME_DEV: FrameModule = {
    mode: 'development',
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}