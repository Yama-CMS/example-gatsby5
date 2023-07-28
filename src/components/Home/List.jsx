import { Link } from "gatsby";
import React from "react";

export default function List({ posts }) {
    return (
        <ul>
            {posts?.map(({ childMarkdownRemark: {frontmatter} }, index) => {
                return (
                    <li key={index}>
                        <img
                            className="thumb"
                            src={frontmatter.media?.formats?.thumb?.url ?? "https://placehold.co/600?text=No+media+found&font=roboto"}
                            alt={frontmatter.media?.alt}
                        />
                        <div className="info">
                            <span className="title">{frontmatter.title}</span>
                            {frontmatter?.excerpt &&
                                <div className="excerpt-wrapper">
                                    <span className="excerpt">
                                        {frontmatter.excerpt}
                                    </span>
                                </div>
                            }
                        </div>
                        <Link to={frontmatter.permalink}></Link>
                    </li>
                )
            })}
        </ul>
    );
}
