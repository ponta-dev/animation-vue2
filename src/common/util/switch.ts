import { AppError } from '../error/error'
import {mode} from '../interface/mode'

export default {
    /**
     * getModeModule
     * @param modules mode[]
     * @requires mode 
     * 
     * アプリケーションのモードに合わせたモジュールを返却する  
     * ない場合はdevelopmentのモジュールを返却する  
     * developmentのモジュールがない場合エラーをスローする
     */
    getModeModule(...modules: mode[]): mode {
        const dev = modules.find((module) => module.mode == 'development')
        if(dev == undefined) throw new AppError("development module not found")

        let module = modules.find((module) => module.mode == process.env.NODE_ENV)
        if(module == undefined) module = dev
        return module
    }
}