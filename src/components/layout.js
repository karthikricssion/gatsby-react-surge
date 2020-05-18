import React from "react"
import { Link } from "gatsby";
import Header from './header';

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Header headerText="Welcome viewers!"/>
        <Link to="/contact/">Contact</Link>
        <Link to="/about/">About</Link>
        {children}
    </div>
  )
}