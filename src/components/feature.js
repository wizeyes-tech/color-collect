import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styles from "./feature.module.css"


const Feature = ({ title, desc, image, titleBold }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.content}>
        <h2 className="type--h3" style={titleBold ? {fontWeight: 600} : {}}>{title}</h2>
        <p className="type--body-small">{desc}</p>
      </div>
      <div className={styles.image}>
        <Img fluid={image} title={title} alt={title} />
      </div>
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.object,
  titleBold: PropTypes.bool,
}

Feature.defaultProps = {
  title: ``,
  desc: ``,
  image: {src: ``},
  titleBold: false,
}

export default Feature