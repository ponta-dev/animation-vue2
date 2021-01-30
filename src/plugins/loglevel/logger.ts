import log from 'loglevel'
import strutil from '@/common/util/string-util'
import { anyType } from '@/common/type/any-type'

export function setLoggerSetting(level: log.LogLevelDesc) {
    const factory = log.methodFactory
    log.methodFactory = function(methodName, logLevel, loggerName) {
        const rawMethod = factory(methodName, logLevel, loggerName)
        return function (...message: anyType[]) {
            const str = strutil.getAnyTypeStr(" ", message)
            rawMethod("["+ strutil.getNowDateStr() +"] "+ methodName.toUpperCase()+" :"+ str)
        }
    }
    log.setLevel(level)
}

setLoggerSetting(process.env.VUE_APP_LOG_LEVEL)