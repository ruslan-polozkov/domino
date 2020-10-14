const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Dominoes are a fun way to relax!`,
    description: `Dominoes is a popular board game in which players line up a chain of dice that meet in halves with the same number of points.`,
    author: `Ruslan Polozkov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `Dominoes`,
        short_name: `Dominoes`,
        start_url: `/`,
        background_color: `#4aac00`,
        theme_color: `#4aac00`,
        display: `minimal-ui`,
        icon: `src/images/dominoes/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        i18n: path.join(__dirname, "src/i18n"),
        images: path.join(__dirname, "src/images"),
      },
    },
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     // language JSON resource path
    //     path: `${__dirname}/src/locales`,
    //     // supported language
    //     languages: [`en`, `ru`],
    //     defaultLanguage: `en`,
    //     // option to redirect to `/ko` when connecting `/`
    //     redirect: true,
    //   }
    // }
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: `${__dirname}/src/components/layout.js`
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
