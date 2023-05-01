import React from "react"
import Page from "../components/Page"
import IntroductionAll from "../components/Introduction"
import StoryGallery from "../components/storyGallery"

const Home = () => {
  return (
    <>
      <Page imageHeaderSource={"source"} headerIsVisible={true} visibleNavbar={true}>
        <IntroductionAll />
        <StoryGallery />
      </Page>
    </>
  )
}

export default Home
