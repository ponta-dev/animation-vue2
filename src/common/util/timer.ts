export default {
    /**
     * sleepCount
     * @param count number
     * @returns Promise<void>
     * 
     * 指定したカウント数（ミリ秒）タイムアウトするPromiseを返却する  
     * async await構文でタイムアウトする場合に利用する  
     * countの指定がない場合デフォルトのタイムアウト値は環境変数を利用する
     */
    sleepCount(count?: number): Promise<void> {
        let timeout = process.env.VUE_APP_TIMEOUT_COUNT
        if(count != undefined) {
            timeout = count
        }
        return new Promise(resolve => setTimeout(resolve, timeout))
    }
}