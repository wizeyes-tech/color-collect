import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"


const Header = ({ siteTitle, logo }) => (
  <header className={headerStyles.header}>
    {/*<Img fixed={data.file.childImageSharp.fixed} />*/}
    {/*<img src={iconLanCN} alt="访问色采中文网站" className={headerStyles.language}/>*/}
    <Link to="/" className={headerStyles.logo}>
      <Img fixed={logo} title={siteTitle} alt={siteTitle + ` Logo`} />
    </Link>
    {/*<img src={iconMenu} alt="Open Menu" className={headerStyles.menu}/>*/}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
