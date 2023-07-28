/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Yama CMS`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                "icon": "src/images/icon.png"
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                "name": "page",
                "path": `${__dirname}/content/pages/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                "name": "post",
                "path": `${__dirname}/content/posts/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                gfm: true,
                footnotes: true,
            }
        },
    ]
};
