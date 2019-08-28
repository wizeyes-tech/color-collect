import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"


const HeaderEn = ({ siteTitle, logo, iconMenu, iconClose, iconLan, lanTitle }) => {
  return (
    <header className={headerStyles.header}>
      <Img fixed={iconLan} title={lanTitle} alt={lanTitle} />
      <Link to="/" className={headerStyles.logo}>
        <Img fixed={logo} title={siteTitle} alt={siteTitle + ` Logo`} />
      </Link>
      <Img fixed={iconMenu} title="Open Menu" alt="Open Menu" />
      {/*<Img fixed={iconClose} title="Close Menu" alt="Close Menu" />*/}
    </header>
  )
}

HeaderEn.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderEn.defaultProps = {
  siteTitle: ``,
}

export default HeaderEn
