import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Feature = ({ title, desc, image }) => {
  return (
    <div style={{margin: '64px 0'}}>
      <h2 className="type--h3">{title}</h2>
      <p className="type--body-small">{desc}</p>
      <Img fluid={image} />
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.object,
}

Feature.defaultProps = {
  title: ``,
  desc: ``,
  image: {src: ``},
}

export default Feature