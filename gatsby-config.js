module.exports = {
  siteMetadata: {
    title: `Color Collect`,
    description: `A color app for everyone.`,
    author: `@carson`,
    titleCN: `色采`,
    descriptionCN: `写给大家用的配色应用。寻找配色灵感，轻松搭配出好色彩。`,
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
        name: `Color Collect Site`,
        short_name: `Color Collect`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F8FAFC`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Montserrat']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-147226585-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-meta-redirect`, // make sure to put last in the array
  ],
  // If you use a custom domain, don’t add a pathPrefix as it will break navigation on your site.
  // Path prefixing is only necessary when the site is not at the root of the domain like with repository sites.
  // pathPrefix: "/color-collect",
}
