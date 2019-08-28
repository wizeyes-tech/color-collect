import React from "react"
import PropTypes from "prop-types"
import FeaturesEN from "./featuresEN"
import FeaturesCN from "./featuresCN"

const Features = ({ language }) => {
  if (language === "en") {
    return <FeaturesEN/>
  } else if (language === "cn") {
    return <FeaturesCN/>
  }
}

Features.propType = {
  language: PropTypes.string,
}

Features.defaultProp = {
  language: `en`,
}

export default Features