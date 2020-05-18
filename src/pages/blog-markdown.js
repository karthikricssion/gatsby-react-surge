import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';

export default function BlogList({data}) {
    return(
        <Layout>
            <div>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(( { node } ) => (
                    <div key={node.id}>
                        <h3> 
                            { node.frontmatter.title }{" "} 
                            <span>
                                - {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{ node.excerpt }</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
                id
                timeToRead
                html
                frontmatter {
                    date(formatString: "DD MMMM YYYY")
                    title
                }
                excerpt
            }
        }
        totalCount
        }
    }
`
