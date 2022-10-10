import React from "react"
import Page from "../components/Page"
import Introduction from "../components/Introduction"
import StoryGallery from "../components/storyGallery"

const Home = () => {
  return (
    <>
      <Page>
        <Introduction />
        <StoryGallery />
      </Page>
    </>
  )
}

export default Home
