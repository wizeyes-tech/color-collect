import React from "react"
import PropTypes from "prop-types"
import HeroEN from "./heroEN"
import HeroCN from "./heroCN"

const Hero = ({ language }) => {
  if (language === "en") {
    return <HeroEN/>
  } else if (language === "cn") {
    return <HeroCN/>
  }
}

Hero.propType = {
  language: PropTypes.string,
}

Hero.defaultProp = {
  language: `en`,
}

export default Hero