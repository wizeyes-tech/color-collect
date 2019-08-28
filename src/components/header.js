import PropTypes from "prop-types"
import React from "react"
import HeaderEn from "./headerEn"
import HeaderCn from "./headerCn"
import { graphql, useStaticQuery } from "gatsby"


const Header = ({ language }) => {
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
      <HeaderEn siteTitle={data.site.siteMetadata.title}
                logo={data.logo.childImageSharp.fixed}
                iconMenu={data.iconMenu.childImageSharp.fixed}
                iconClose={data.iconClose.childImageSharp.fixed}
                iconLan={data.iconLanCN.childImageSharp.fixed}
                lanTitle={`访问色采中文网站`}
      />
    )
  } else if (language === 'cn') {
    return (
      <HeaderCn siteTitle={data.site.siteMetadata.titleCN}
                logo={data.logo.childImageSharp.fixed}
                iconMenu={data.iconMenu.childImageSharp.fixed}
                iconClose={data.iconClose.childImageSharp.fixed}
                iconLan={data.iconLanEN.childImageSharp.fixed}
                lanTitle={`Visit Color Collect Website in English`}
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
