import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function Sidebar() {
    const data = useStaticQuery(graphql`
        query {
            pages: allFile(filter: {sourceInstanceName: {eq: "page"}}) {
                nodes {
                    childMarkdownRemark {
                        frontmatter {
                            title
                            permalink
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
        }
    `);

    return (
        <nav>
            <ul>
                {data.pages.nodes?.map(({ childMarkdownRemark: {frontmatter} }, index) => {
                    return (
                        <li key={index}>
                            <img
                                className="thumb"
                                src={frontmatter.media?.formats?.thumb?.url ?? "https://placehold.co/40x40"}
                                alt={frontmatter.media?.alt}
                            />
                            <Link to={frontmatter.permalink}>
                              {frontmatter.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
