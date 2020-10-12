/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
   siteMetadata: {
    title: "Gatsby Markdown Blog",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://wizardly-torvalds-458749.netlify.app/",
    image: "/banner-img.png",
    twitterUsername: "@shahriyar31",
  },

  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/posts/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
