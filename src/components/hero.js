import React from "react"
import PropTypes from "prop-types"
import HeroEn from "./heroEn"
import HeroCn from "./heroCn"

const Hero = ({ language }) => {
  if (language === "en") {
    return <HeroEn/>
  } else if (language === "cn") {
    return <HeroCn/>
  }
}

Hero.propType = {
  language: PropTypes.string,
}

Hero.defaultProp = {
  language: `en`,
}

export default Hero