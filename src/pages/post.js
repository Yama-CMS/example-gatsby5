import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../styles/main.css";

export default function Post({ data }) {
    const { frontmatter, html } = data.document;

    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <img
                className="media-desktop"
                src={frontmatter.media?.formats?.desktop?.url ?? "https://placehold.co/800?text=No+media+found&font=roboto"}
                alt={frontmatter.media?.alt}
            />
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
            media {
                formats {
                    desktop {
                        url
                    }
                }
                alt
                name
                url
            }
        }
    }
}`
