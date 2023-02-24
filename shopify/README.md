## Shopify の環境を取得する

[Shopify パートナープログラム | Shopify パートナーとして活躍 - Shopify 日本](https://www.shopify.com/jp/partners)
[Create a theme](https://shopify.dev/themes/getting-started/create)

## 開発

```
shopify theme push
shopify theme dev -t {theme_id}
shopify theme check .
```

## 参考実装

[Shopify/dawn: Shopify's first source available reference theme, with Online Store 2.0 features and performance built-in.](https://github.com/Shopify/dawn)

## 構造

構成の全体像 [Theme architecture](https://shopify.dev/themes/architecture)

-   config https://shopify.dev/themes/architecture/config
    -   theme や logo などの全体の定義
    -   `settings_schema.json` (必須): テーマ エディタのテーマ設定領域の構成と内容を管理する。
        -   タイプ https://shopify.dev/themes/architecture/settings#usage
    -   `settings_data.json` (必須): `settings_schema.json` の設定された値を保存する。
-   layouts https://shopify.dev/themes/architecture/layouts
    -   templates の wrapper でデフォルトは `theme.liquid`
    -   templates で使用する layout を指定することもできる https://shopify.dev/themes/architecture/templates/json-templates
    -   `theme.liquid` (必須): 全般的なレイアウトは、チェックアウト以外のすべてのページに適用される。
    -   `checkout.liquid`: Checkout ページに利用される。Shopify Plus マーチャントのみ利用できる。
-   templates https://shopify.dev/themes/architecture/templates
    -   JSON 形式と liquid 形式があり、JSON 形式の方がカスタマイズ性が高い
    -   sections の設定を定義して呼び出す
    -   下記が基本的な templates ファイル https://shopify.dev/themes/architecture/templates#subtypes
        -   404.json
        -   article.json: `/blogs/news/:article`
        -   blog.json: `/blogs/news`
        -   cart.json: `/cart`
        -   collection.json: `/collection/:collection`
        -   customers
            -   account.json: `/`
            -   activate_account.json: `/`
            -   addresses.json: `/`
            -   login.json: `/`
            -   order.json: `/`
            -   register.json: `/`
            -   reset_password.json: `/`
        -   gift_card.liquid: `/`
        -   index.json: `/`
        -   list-collections.json: `/collections`
        -   page.contact.json: `/contact`
        -   page.json: `/`
        -   password.json: `/password`
        -   product.json: `/products/:product`
        -   search.json: `/search`
        -   robots.txt.liquid: `/robots.txt`
-   sections https://shopify.dev/themes/architecture/sections
    -   theme の中核
    -   [Input settings](https://shopify.dev/docs/themes/architecture/settings/input-settings)
-   snippets
    -   section よりも小さい再利用可能な component
-   locals https://shopify.dev/themes/architecture/locales
    -   言語の定義
-   assets 静的ファイル置き場

## Liquid

Liquid の概要 [Shopify のテンプレート言語 Liquid の概要 - Shopify 日本](https://www.shopify.com/jp/blog/partner-shopify-template-language-liquid-overview)

-   Liquid https://shopify.dev/api/liquid
    -   変数の埋め込みは `{{ }}` か `{% %}`
        -   `{{ }}` は評価した値が代入されるため、str などはそのまま出力される
        -   `{% %}` はロジックを示す
-   環境
    -   関数 https://shopify.dev/api/liquid/filters
    -   オブジェクト https://shopify.dev/api/liquid/objects
-   よく使う filters
    -   [default](https://shopify.github.io/liquid/filters/default/)

## その他

-   フォームの種類 [Liquid tags: theme tags](https://shopify.dev/docs/api/liquid/tags/theme-tags#form)

## 方針

-   label などの記述に関して
    -   英語は最初の単語のみ Capitalize
    -   英語は末尾のピリオドを省略する
    -   日本語は末尾を読点で終える

## 参考資料

-   [Shopify Theme Section を初めて作成するときのポイント【2023 年版】 - Shopify 日本](https://www.shopify.com/jp/blog/partner-how-to-create-your-first-shopify-theme-section)
-   [Liquid を使用した Shopify のフォーム作成について - Shopify 日本](https://www.shopify.com/jp/blog/partner-liquid-form)
