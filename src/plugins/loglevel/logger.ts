import log from 'loglevel'
import strutil from '@/common/util/string-util'

export function setLoggerSetting(level: log.LogLevelDesc) {
    let factory = log.methodFactory
    log.methodFactory = function(methodName, logLevel, loggerName) {
        let rawMethod = factory(methodName, logLevel, loggerName)
        return function (...message:any[]) {
            rawMethod("["+ strutil.getNowDateStr() +"] "+ methodName.toUpperCase()+" :"+ JSON.stringify(message))
        }
    }
    log.setLevel(level)
}

setLoggerSetting(process.env.VUE_APP_LOG_LEVEL)