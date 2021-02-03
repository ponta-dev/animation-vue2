import swt from '@/common/util/switch'
import { FRAME_DEV } from "./dev"
import { Module } from "vuex"

const module = swt.getModeModule(FRAME_DEV)
// eslint-disable-next-line
export const FRAME = module as Module<any, any>