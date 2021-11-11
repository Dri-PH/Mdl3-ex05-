module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby-Template-Example",
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "acdata",
        fieldName: "acdata",
        url:
          "https://api-us-east-1.graphcms.com/v2/ckvs2qh420j6101xkfbwh93fm/master"
      }
    }
  ], 
};
