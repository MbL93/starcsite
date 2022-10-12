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
        mdColWidth={33}
        colWidth={33}
        rowMargin={0}
        gutter={"2px"}
        title="Schmandalos"
      />
    </GalleryContainer>
  )
}

const pageQuery = graphql`
  {
    allContentfulGalleryImages(sort: { fields: galleryImage___title }) {
      nodes {
        galleryImage {
          thumb: gatsbyImageData(
            width: 1200
            height: 1200
            placeholder: BLURRED
          )
          full: gatsbyImageData(layout: FULL_WIDTH)
          title
        }
      }
    }
  }
`
export default GalleryComp
