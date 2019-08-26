/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      
      logo: file(relativePath: { eq: "logos/colorcollect-mobile-logo.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      iconMenu: file(relativePath: { eq: "icons/menu.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      iconClose: file(relativePath: { eq: "icons/close.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      iconLanCN: file(relativePath: { eq: "icons/language-cn.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      
      iconLanEN: file(relativePath: { eq: "icons/language-en.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title}
              logo={data.logo.childImageSharp.fixed}
              iconMenu={data.iconMenu.childImageSharp.fixed}
              iconClose={data.iconClose.childImageSharp.fixed}
              iconLan={data.iconLanCN.childImageSharp.fixed}
              lanTitle={`访问色采中文网站`}
      />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} All rights reserved
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
