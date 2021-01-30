import moment from 'moment'
import { anyType } from '../type/any-type'

export default {
    /**
     * getNowDateStr
     * @param
     * @returns string
     * 
     * YYYY-MM-DD HH:mm:ss SSS ZZ 形式の現在時刻を文字列で返却する
     */
    getNowDateStr(): string {
        return moment(new Date()).format("YYYY-MM-DD HH:mm:ss SSS ZZ")
    },

    /**
     * getAnyTypeStr
     * @param joint 接続用の文字
     * @param anyType anyTypeの配列
     * @returns string 
     * 
     * anyType型の配列に対してjointで連結した文字列を返却する
     */
    getAnyTypeStr(joint: string, ...anyType: anyType[]): string {
        let str = ""
        anyType.forEach((val) => {
            switch(typeof val) {
                case 'string':
                    str = str + joint + val
                    break
                case 'number':
                    str = str + joint + val.toString()
                    break
                case 'object':
                    str = str + joint + JSON.stringify(val)
                    break
            }
        })
        return str
    }
}