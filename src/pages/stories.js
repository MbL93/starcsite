import React from "react"
import Page from "../components/Page"
import { Headline } from "../styles/Typography"
import  StoryGallery  from "../components/storyGallery"
const Stories = () => {
  return (
    <Page  imageHeaderSource={"source"} headerIsVisible={true} visibleNavbar={true}>
      <StoryGallery />
    </Page>
  )
}

export default Stories
