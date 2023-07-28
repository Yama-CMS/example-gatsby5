import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../styles/main.css"

export default function Page({ data }) {
    const { frontmatter, html } = data.document;

    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            {frontmatter?.excerpt &&
                <p>{frontmatter.excerpt}</p>
            }
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    )
}

export const page = graphql`
query($permalink: String) {
    document: markdownRemark(frontmatter: { permalink: { eq: $permalink } }) {
        html
        frontmatter {
            title
            excerpt
        }
    }
}`
