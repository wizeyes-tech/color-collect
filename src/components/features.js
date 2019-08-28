import React from "react"
import PropTypes from "prop-types"
import FeaturesEn from "./featuresEn"
import FeaturesCn from "./featuresCn"

const Features = ({ language }) => {
  if (language === "en") {
    return <FeaturesEn/>
  } else if (language === "cn") {
    return <FeaturesCn/>
  }
}

Features.propType = {
  language: PropTypes.string,
}

Features.defaultProp = {
  language: `en`,
}

export default Features