declare namespace NodeJS {
    interface ProcessEnv {
        /**
         * NODE_ENV  
         * 実行モード  
         * .env.[mode]のmode部分  
         * 実行時に --mode developmentのような形で指定する  
         * vue-cli-service serve > development  
         * vue-cli-service test:unit > test  
         * vue-cli-service build > production  
         * vue-cli-service test:e2e > production
         */
        NODE_ENV: "production" | "development" | "test"

        /**
         * BASE_URL  
         * ベースURL
         */
        BASE_URL: string
        
        /**
         * VUE_APP_TIMEOUT_COUNT  
         * タイムアウト時間  
         * アプリケーション共通のタイムアウト時間に用いる
         */
        VUE_APP_TIMEOUT_COUNT: number
        
        /**
         * VUE_APP_LOG_LEVEL  
         * アプリケーションのログレベル
         */
        VUE_APP_LOG_LEVEL: log.LogLevelDesc
    }
}