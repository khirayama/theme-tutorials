## Shopifyの環境を取得する

[Shopify パートナープログラム | Shopify パートナーとして活躍 - Shopify 日本](https://www.shopify.com/jp/partners)

## 開発

```
shopify theme push
shopify theme dev -t {theme_id}
```


## 参考実装

[Shopify/dawn: Shopify's first source available reference theme, with Online Store 2.0 features and performance built-in.](https://github.com/Shopify/dawn)


## 構造

構成の全体像 [Theme architecture](https://shopify.dev/themes/architecture)

- config https://shopify.dev/themes/architecture/config
  - themeやlogoなどの全体の定義
  - `settings_schema.json` (必須): テーマ エディタのテーマ設定領域の構成と内容を管理する。
    - タイプ https://shopify.dev/themes/architecture/settings#usage
  - `settings_data.json` (必須): `settings_schema.json` の設定された値を保存する。
- layouts https://shopify.dev/themes/architecture/layouts
  - templatesのwrapperでデフォルトは `theme.liquid`
  - templatesで使用するlayoutを指定することもできる https://shopify.dev/themes/architecture/templates/json-templates
  - `theme.liquid` (必須): 全般的なレイアウトは、チェックアウト以外のすべてのページに適用される。
  - `checkout.liquid`: Checkoutページに利用される。Shopify Plusマーチャントのみ利用できる。
- templates https://shopify.dev/themes/architecture/templates
  - JSON形式とliquid形式があり、JSON形式の方がカスタマイズ性が高い
  - sectionsの設定を定義して呼び出す
  - 下記が基本的なtemplatesファイル https://shopify.dev/themes/architecture/templates#subtypes
    - 404.json
    - article.json
    - blog.json
    - cart.json
    - collection.json
    - customers
      - account.json
      - activate_account.json
      - addresses.json
      - login.json
      - order.json
      - register.json
      - reset_password.json
    - gift_card.liquid
    - index.json
    - list-collections.json
    - page.contact.json
    - page.json
    - password.json
    - product.json
    - search.json
- sections https://shopify.dev/themes/architecture/sections
  - themeの中核
- snippets
  - sectionよりも小さい再利用可能なcomponent
- locals https://shopify.dev/themes/architecture/locales
  - 言語の定義
- assets 静的ファイル置き場


## Liquid

Liquidの概要 [Shopifyのテンプレート言語 Liquidの概要 - Shopify 日本](https://www.shopify.com/jp/blog/partner-shopify-template-language-liquid-overview)

- Liquid https://shopify.dev/api/liquid
  - 変数の埋め込みは `{{ }}` か `{% %}`
    - `{{ }}` は評価した値が代入されるため、strなどはそのまま出力される
    - `{% %}` はロジックを示す
- 環境
  - 関数 https://shopify.dev/api/liquid/filters
  - オブジェクト https://shopify.dev/api/liquid/objects


## 参考資料

[Shopify Theme Sectionを初めて作成するときのポイント【2023年版】 - Shopify 日本](https://www.shopify.com/jp/blog/partner-how-to-create-your-first-shopify-theme-section)
