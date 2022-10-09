import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { GalleryContainer } from "../styles/GalleryLayout"

const GalleryComp = () => {
  const data = useStaticQuery(pageQuery)
  const images = data.allContentfulGalleryImages.nodes.map(
    ({ galleryImage }) => galleryImage
  )
  console.log(images)
  // `images` is an array of objects with `thumb` and `full`
  return (
    <GalleryContainer>
      <Gallery
        images={images}
        colWidth={400}
        rowMargin={50}
        title="Schmandalo"
      />
    </GalleryContainer>
  )
}

const pageQuery = graphql`
  {
    allContentfulGalleryImages {
      nodes {
        galleryImage {
          thumb: gatsbyImageData(
            width: 1200
            height: 1200
            placeholder: BLURRED
          )
          full: gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`
export default GalleryComp
