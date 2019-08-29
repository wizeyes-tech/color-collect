import React from "react"
import Img from "gatsby-image"
import styles from "./credit.module.css"


const Credit = ({ icon, name, link }) => (
  <a href={link} className={styles.credit}>
    <Img fixed={icon} title={name} alt={name}/>
    <h3 className="type--note">{name}</h3>
  </a>
)

export default Credit