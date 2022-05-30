module.exports = {
  siteMetadata: {
    title: `Josh Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Plus Jakarta Sans`
      ],
      display: 'swap'
    }
  }]
};