import { mode } from "@/common/interface/mode";
import { ActionContext } from "vuex";
import { Menu } from "../interface/menu";
import { User } from "../interface/user";

export interface FrameState {
    /**
     * User  
     * ユーザ情報
     */
    user: User
    /**
     * menu  
     * メニュー
     */
    menu: Menu[]
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
    /**
     * setMenu  
     * @param state FrameState
     * @param menu Menu[]
     * @returns void  
     * 
     * メニューを設定する
     */
    setMenu(state: FrameState, menu: Menu[]): void
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
    /**
     * getMenu
     * @param state FrameState
     * @returns Menu[]
     * 
     * メニューを取得する
     */
    getMenu(state: FrameState): Menu[]
}

export interface FrameModule extends mode {
    state: FrameState
    mutations: FrameMutations
    actions: FrameActions
    getters: FrameGetters
}