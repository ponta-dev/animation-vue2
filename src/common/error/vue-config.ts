import { AppError } from "./error";
import log from 'loglevel'

export function configErrorHandler(err: Error, vm: Vue, info: string) {
    if(err instanceof AppError) {
        log.error('catch error on Vue.config.errorHandler'
            , 'アプリケーションエラーが発生しました'
            , 'error message: ', err.message
            , 'info: ', info
        )
    } else {
        log.error('catch error on Vue.config.errorHandler'
            , '分類不明のエラーが発生しました'
            , 'error message: ', err.message
            , 'info: ', info
        )
    }
}