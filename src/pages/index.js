import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import List from '../components/Home/List';
import '../styles/main.css';

export default function Home({ data }) {

    const { frontmatter, html } = data.document ?? {frontmatter: null, html: null};

    return (
        <Layout>
            <h1>{frontmatter?.title}</h1>
            {html &&
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            }
            <section className="wrapper posts">
                <h2>List of posts</h2>
                <List
                    posts={data?.posts?.nodes}
                />
            </section>
        </Layout>
    )
}

export const data = graphql`
query {
    document: markdownRemark(frontmatter: { permalink: { eq: "/" } }) {
        html
        frontmatter {
            title
        }
    }
    posts: allFile(filter: {sourceInstanceName: {eq: "post"}}) {
        nodes {
            childMarkdownRemark {
                frontmatter {
                    title
                    permalink
                    excerpt
                    media {
                        formats {
                            thumb {
                                url
                            }
                        }
                        alt
                        name
                        url
                    }
                }
            }
        }
    }
}`
