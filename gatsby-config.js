module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    // https://www.gatsbyjs.org/packages/gatsby-plugin-tslint/
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/,
        // name of your formatter (optional)
        formatter: 'prose',
        
        // path to directory containing formatter (optional)
        formattersDirectory: 'node_modules/tslint-loader/formatters/',
      }
    },

    // https://www.gatsbyjs.org/packages/gatsby-plugin-sass/
    `gatsby-plugin-sass`,

    // https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
    // https://www.npmjs.com/package/react-helmet
    `gatsby-plugin-react-helmet`,

    // https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
    `gatsby-transformer-sharp`,

    // https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
    `gatsby-plugin-sharp`,

    // https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
