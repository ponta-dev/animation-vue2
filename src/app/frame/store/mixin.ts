import { appMode } from "@/common/type/app-mode";
import { ActionContext } from "vuex";
import { User } from "../interface/user";

export interface FrameState {
    /**
     * User  
     * ユーザ情報
     */
    user: User
}

export interface FrameMutations {
    /**
     * setUser  
     * @param state FrameState
     * @param user User
     * @returns void
     * 
     * ユーザ情報を設定する
     */
    setUser(state: FrameState, user: User): void
}

export interface FrameActions {
    /**
     * loginAction
     * @param context 
     * @returns void
     * 
     * ログイン処理を実施する
     */
    loginAction(context: ActionContext<FrameState, FrameState>): void
}

export interface FrameGetters {
    /**
     * getUser
     * @param state FrameState
     * @returns User
     * 
     * ユーザ情報を取得する
     */
    getUser(state: FrameState): User
}

export interface FrameModule {
    mode: appMode
    state: FrameState
    mutations: FrameMutations
    actions: FrameActions
    getters: FrameGetters
}