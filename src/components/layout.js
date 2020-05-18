import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import Header from './header';

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)


  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header headerText={ data.site.siteMetadata.title } />
      <Link to="/contact/">Contact</Link> |
      <Link to="/about/">About</Link> |
      <Link to="/blog-markdown/">Blog(Mark Down)</Link> |
      <Link to="/my-files/">Files</Link>
      {children}
    </div>
  )
}