<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter - TypeScript
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/andykenward/gatsby-starter-default-typescript
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    npm start
    ```

    To generate GraphQL TypeScript typings using [GraphQL Code Generator](https://graphql-code-generator.com).
    ```sh
    npm run codegen:watch
    ```

    To check TypeScript typings.
    ```sh
    npm run type-check:watch
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── codegen.yml
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── schema.json
    └── tsconfig.json

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`codegen.yml`**: This is a configuration file for [GraphQL Code Generator](https://graphql-code-generator.com). GraphQL Code Generator is a CLI tool that can generate TypeScript typings out of a GraphQL schema.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: Gatsby is licensed under the MIT license.

1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.

1. **`schema.json`**: GraphQL schema generated by [gatsby-plugin-extract-schema](https://github.com/NickyMeuleman/gatsby-plugin-extract-schema) and used by [GraphQL Code Generator](https://graphql-code-generator.com) to generate TypeScript typings.

1. **`tsconfig.json`**: This is a configuration file for [TypeScript](https://www.typescriptlang.org). The [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file specifies the root files and the compiler options required to type check the project. It is not used to compile, we use [`gatsby-plugin-typescript`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript) to do this.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/andykenward/gatsby-starter-default-typescript)

<!-- AUTO-GENERATED-CONTENT:END -->

## 動かし方

### ローカルで動作確認

- npm install
- npm start

### build and deploy

1. AWSへのログインを行う
    ### `saml2aws login`

bitbucket-pipelines.ymlの設定でマージしたタイミングで自動でデプロイされます
- developブランチにマージするとstaging環境にデプロイされます
https://staging.sompo.io/sprint

- masterブランチにマージすると本番環境にデプロイされます
https://sompo.io/sprint

### 記事の投稿の仕方

「src/article/」内の各カテゴリフォルダ直下に***.mdファイルを追加することで記事の投稿ができます

mdファイルの「frontmatter」の設定

```
path: 生成されるURL
date: 日付 → 例：2019-11-11「年-月-日」
draft: 下書き設定 ←「false」公開「true」下書き
pagetype: "category"
categoryslug: 絞りこむ用のカテゴリ
tags: タグ
title: タイトル
thumbnail: サムネイル ← 画像のパス
image: 画像 ← 画像のパス
```

参考  
https://www.gatsbyjs.org/docs/mdx/


## その他

- gatsbyjs  
https://www.gatsbyjs.org/

### ページングってどうやってやってるの？
- pagesのしたのファイルたちが実際のUPLパスとなる
- `<Link to="ページ名">` でリンクすることができる
