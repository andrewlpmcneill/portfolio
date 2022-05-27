/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`, {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-emotion`],
}
