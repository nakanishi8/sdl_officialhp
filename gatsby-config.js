
let activeEnv =
process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `SOMPO Digital Lab`,
    description: `SOMPO Digital Labは、東京、シリコンバレーとテルアビブの3拠点をベースに、新たな「安心・安全・健康」の体験価値を創造していきます。`,
    author: `@andykenward`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/article`,
        name: "article",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
          },
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-draft',
      options: {
        /**
         * be added field name
         * Default is 'draft'
         **/
        fieldName: 'notReleased',
        /**
         * moment-timezone
         * Default is 'UTC'
         **/
        timezone: 'Asia/Tokyo',
        /**
         * publish draft posts
         * Default is 'false'
         **/
        // publishDraft: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6fffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-extract-schema`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: process.env.REACT_APP_GTM_CONTAINER_ID,

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      // includeInDevelopment: false,
    },
  }
  ],
}
