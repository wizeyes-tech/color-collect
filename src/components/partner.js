import React from "react"
import Img from "gatsby-image"
import styles from "./partner.module.css"
import { Link } from "gatsby"


const Partner = ({ icon, name, link }) => (
  <Link to={link} className={styles.partner}>
    <Img fixed={icon} title={name} alt={name}/>
    <div>
      <h3 className="type--h5">{name}</h3>
      <p className="type--body-small">查看导入教程 →</p>
    </div>
  </Link>
)

export default Partner