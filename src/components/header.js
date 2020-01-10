import PropTypes from "prop-types"
import React from "react"
import HeaderEN from "./headerEN"
import HeaderCN from "./headerCN"
import { graphql, useStaticQuery } from "gatsby"


const Header = ({ language, lanLink }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleCN
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

  if (language === 'en') {
    return (
      <HeaderEN siteTitle={data.site.siteMetadata.title}
                logo={data.logo.childImageSharp.fixed}
                iconMenu={data.iconMenu.childImageSharp.fixed}
                iconClose={data.iconClose.childImageSharp.fixed}
                iconLan={data.iconLanCN.childImageSharp.fixed}
                lanTitle={`访问色采中文网站`}
                lanLink={lanLink}
      />
    )
  } else if (language === 'cn') {
    return (
      <HeaderCN siteTitle={data.site.siteMetadata.titleCN}
                logo={data.logo.childImageSharp.fixed}
                iconMenu={data.iconMenu.childImageSharp.fixed}
                iconClose={data.iconClose.childImageSharp.fixed}
                iconLan={data.iconLanEN.childImageSharp.fixed}
                lanTitle={`Visit Color Collect Website in English`}
                lanLink={lanLink}
      />
    )
  }
}

Header.propTypes = {
  language: PropTypes.string,
}

Header.defaultProps = {
  language: `en`,
}

export default Header
