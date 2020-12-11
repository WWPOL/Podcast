module.exports = {
  siteMetadata: {
    title: `The Barry Boys Show`,
    description: `Homepage of The Barry Boys Show, the podcast of your favorite Barry Boys.`,
    author: `@WWPOL`,
    siteUrl: `https://the.barryboys.show/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
};
