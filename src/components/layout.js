/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, language }) => {
  return (
    <div>
      <div className="wrapper">
        <Header language={language}/>
        <main>{children}</main>
      </div>
      <Footer homeLink={`/`}
              homeTitle={`Home`}
              policyTtile={`Privacy Policy`}
              termsTitle={`Terms of Use`}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
