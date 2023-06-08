import React, { useState } from "react"
import Page from "../components/Page"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import StoryGallery from "../components/storyGallery"
const Marc = () => {
  var storyType = "landscape"
  const data = useStaticQuery(marcStoryTypeQuery)

  const stories = data.allContentfulStory.nodes
  console.log(storyType)
  return (
    <Page
      imageHeaderSource={"source"}
      headerIsVisible={false}
      visibleNavbar={true}
    >
      <StoryGallery stories={stories} title="" />
    </Page>
  )
}
// const marcQuery = graphql`
//   {
//     allContentfulStory(filter: { author: { eq: "marc" } }) {
//       nodes {
//         id
//         leadimage {
//           gatsbyImageData
//         }
//         title
//       }
//     }
//   }
// `

export const marcStoryTypeQuery = graphql`
  query marcStoryTypeQuery($storyType: String!) {
    allContentfulStory(
      filter: { author: { eq: "marc" }, type: { eq: $storyType } }
    ) {
      nodes {
        id
        leadimage {
          gatsbyImageData
        }
        title
      }
    }
  }
`
export default Marc
