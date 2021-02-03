import { FrameActions, FrameGetters, FrameModule, FrameMutations, FrameState } from "./mixin";
import timer from '@/common/util/timer'
import { DATA_USER } from "../data/user-data";

const state: FrameState = {
    user: {
        userId: '',
        userName: ''
    }
}

const mutations: FrameMutations = {
    setUser(state, user) {
        state.user = user
    }
}

const actions: FrameActions = {
    async loginAction(context) {
        await timer.sleepCount()
        context.commit('setUser', DATA_USER)
    }
}

const getters: FrameGetters = {
    getUser(state) {
        return state.user
    }
}

export const FRAME_DEV: FrameModule = {
    mode: 'development',
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}