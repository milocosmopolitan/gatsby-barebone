const UI_PLUGINS = [
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `patua one`,
        `roboto slab`
        // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  },
  // https://www.gatsbyjs.org/packages/gatsby-plugin-sass/
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-plugin-material-ui`,
  }
];
const COMPILE_LANG_PLUGINS = [
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
];
const IMAGE_PROCESSING_PLUGINS = [
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
];

const SEO_PLUGINS = [
// https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
    // https://www.npmjs.com/package/react-helmet
    `gatsby-plugin-react-helmet`,
];

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    ...COMPILE_LANG_PLUGINS,
    ...UI_PLUGINS,
    ...IMAGE_PROCESSING_PLUGINS,
    ...SEO_PLUGINS,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    },

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
