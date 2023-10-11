// We manually define our schema here for expliciteness.
// See https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/
const typeDefs = `
    type MarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter
    }
    type MarkdownRemarkFrontmatter {
        permalink: String!
        title: String!
        excerpt: String
        media: MarkdownRemarkFrontmatterMedia
    }
    type MarkdownRemarkFrontmatterMedia {
        url: String!
        name: String!
        alt: String
        formats: MarkdownRemarkFrontmatterMediaFormats
    }
    type MarkdownRemarkFrontmatterMediaFormats {
        thumb: MarkdownRemarkFrontmatterMediaFormatsFormat
        desktop: MarkdownRemarkFrontmatterMediaFormatsFormat
    }
    type MarkdownRemarkFrontmatterMediaFormatsFormat {
        url: String!
    }
`;

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(typeDefs);
}

exports.createPages = async function ({actions, graphql}) {
    const results = await graphql(`
        query {
            allFile {
                nodes {
                    sourceInstanceName
                    childMarkdownRemark {
                        frontmatter {
                            permalink
                        }
                    }
                }
            }
        }
    `);

    // Create pages for each node, using their sourceInstanceName as template.
    // See gatsby-config.js.
    for(const node of results.data.allFile.nodes) {
        const permalink = node.childMarkdownRemark.frontmatter.permalink;
        if (permalink == '/') {
            continue;
        }

        const component = require.resolve(`${__dirname}/src/pages/${node.sourceInstanceName}.js`);
        actions.createPage({
            path: permalink,
            component: component,
            context: {permalink},
        });
    }
}
