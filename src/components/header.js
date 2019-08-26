import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"


const Header = ({ siteTitle, logo, iconMenu, iconClose, iconLan, lanTitle }) => (
  <header className={headerStyles.header}>
    <Img fixed={iconLan} title={lanTitle} alt={lanTitle} />
    <Link to="/" className={headerStyles.logo}>
      <Img fixed={logo} title={siteTitle} alt={siteTitle + ` Logo`} />
    </Link>
    <Img fixed={iconMenu} title="Open Menu" alt="Open Menu" />
    {/*<Img fixed={iconClose} title="Close Menu" alt="Close Menu" />*/}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
