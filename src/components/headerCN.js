import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"


const HeaderCN = ({ siteTitle, logo, iconMenu, iconClose, iconLan, lanTitle }) => {
  return (
    <header className={styles.header}>
      <Link to={`/`} className={styles.language}>
        <Img fixed={iconLan} title={lanTitle} alt={lanTitle}/>
      </Link>
      <Link to="/" className={styles.logo}>
        <Img fixed={logo} title={siteTitle} alt={siteTitle + ` Logo`}/>
      </Link>
      {/*<div className={styles.menu}>*/}
      {/*  <div className={styles.menuTrigger}>*/}
      {/*    <Img fixed={iconMenu} title="Open Menu" alt="Open Menu"/>*/}
      {/*    /!*<Img fixed={iconClose} title="Close Menu" alt="Close Menu" />*!/*/}
      {/*  </div>*/}
      {/*  <div className={styles.menuList}>*/}
      {/*    /!*<Link to={`/`}>探索色卡</Link>*!/*/}
      {/*    /!*<Link to={`/`}>合作应用</Link>*!/*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  )
}

HeaderCN.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderCN.defaultProps = {
  siteTitle: ``,
}

export default HeaderCN
