import React from "react"
import Feature from "./feature"
import { graphql, useStaticQuery } from "gatsby"

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
    <div>
      <Feature title={`Real-time capture`}
               desc={`Eu facilisi ut ullamcorper aenean mattis. Eu facilisi ut ullamcorper aenean mattis.`}
               image={imageQuery.cameraEn.childImageSharp.fluid}
      />

      <Feature title={`Explore 600+ palettes`}
               desc={`Eu facilisi ut ullamcorper aenean mattis. Eu facilisi ut ullamcorper aenean mattis.`}
               image={imageQuery.photosEn.childImageSharp.fluid}
      />

      <Feature title={`Photo color palettes`}
               desc={`Eu facilisi ut ullamcorper aenean mattis. Eu facilisi ut ullamcorper aenean mattis.`}
               image={imageQuery.previewEn.childImageSharp.fluid}
      />
    </div>
  )
}

FeaturesEN.propType = {}

FeaturesEN.defaultProp = {}

export default FeaturesEN