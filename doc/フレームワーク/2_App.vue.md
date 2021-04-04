## App.vue

画面全体を切り替えられるようにApp.vueは下位コンポーネントの参照のみで何もしない  
各コンポーネントのディレクトリはapp/以下  
```
app
  ドメイン名
    component
      画面の定義
    data
      モックデータや定数などのデータを配備する
    interface
      機能内で使うインタフェースを定義する
    store
      機能で利用するVuexの定義
      mixin.ts
        Vuexで型を利用できるようにVuexの型定義を行う
      index.ts
        plugins/storeにある全体のストア定義に組み込むモジュールを提供する
        common/util/switch.tsのモジュール切り替え関数を呼び出す
      dev.ts
        モック用のストアの実装
```

## Vuetifyの基本コンポネント

### v-appコンポネント

Vuetifyを利用する上で必須のコンポーネント  
他のVuetifyコンポーネントの基点になる  
一度のみ描画が必要  
v-app以下の基本コンポーネントとして下記がある  
下記のコンポーネントも1つだけ配置可能
* v-app-bar 基本のヘッダーメニュー
* v-system-bar app-barの上位メニュー
* v-navigation-drawer サイドメニュー
* v-footer フッター
* v-bottom-navigation フッターの上位メニュー
* v-main 本体のコンポーネント

### 基本プロパティ

#### app
app propが適用されると自動的にposition: fixedがレイアウトに適用される  
absolute配置が必要な場合、absolute指定で上書きできる