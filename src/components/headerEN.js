import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"


const HeaderEN = ({ siteTitle, logo, iconMenu, iconClose, iconLan, lanTitle }) => {
  return (
    <header className={headerStyles.header}>
      <Link to={`/cn/`}>
        <Img fixed={iconLan} title={lanTitle} alt={lanTitle} />
      </Link>
      <Link to="/cn/" className={headerStyles.logo}>
        <Img fixed={logo} title={siteTitle} alt={siteTitle + ` Logo`} />
      </Link>
      <Img fixed={iconMenu} title="Open Menu" alt="Open Menu" />
      {/*<Img fixed={iconClose} title="Close Menu" alt="Close Menu" />*/}
    </header>
  )
}

HeaderEN.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderEN.defaultProps = {
  siteTitle: ``,
}

export default HeaderEN
