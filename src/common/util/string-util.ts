import moment from 'moment'

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
    }
}