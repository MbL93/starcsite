import React from "react"
import Page from "../components/Page"
import Introduction from "../components/Introduction"
import StoryGallery from "../components/storyGallery"

const Home = () => {
  return (
    <>
      <Page headerIsVisible={true} visibleNavbar={true}>
        <Introduction />
        <StoryGallery />
      </Page>
    </>
  )
}

export default Home
