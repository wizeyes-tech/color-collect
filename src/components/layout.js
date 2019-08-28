/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, language }) => {
  return (
    <div>
      <div className="wrapper">
        <Header language={language}/>
        <main>{children}</main>
      </div>
      <footer>
        <div className="wrapper">
          <span className="type--body-xsmall type--on-dark">© {new Date().getFullYear()} All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
