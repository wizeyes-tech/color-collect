import React from "react"
import Feature from "./feature"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./feature.module.css"

const FeaturesEN = () => {
  const imageQuery = useStaticQuery(graphql`
    query {
      cameraEn: file(relativePath: { eq: "features/camera-en.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      photosEn: file(relativePath: { eq: "features/photos-en.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      previewEn: file(relativePath: { eq: "features/preview-en.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)



  return (
    <div className={styles.features}>
      <Feature title={`Real-time capture`}
               desc={`When you pick colors through your camera, you can manually adjust the circles for your ideal shades.`}
               image={imageQuery.cameraEn.childImageSharp.fluid}
      />

      <Feature title={`Explore 600+ palettes`}
               desc={`We have discovered amazing colors for you from classic paintings, landscape, movies, and famous characters.`}
               image={imageQuery.previewEn.childImageSharp.fluid}
      />

      <Feature title={`Photo color palettes`}
               desc={`Discover colors from your photos. A random selection feature will explore the possibilities for you.`}
               image={imageQuery.photosEn.childImageSharp.fluid}
      />
    </div>
  )
}

FeaturesEN.propType = {}

FeaturesEN.defaultProp = {}

export default FeaturesEN