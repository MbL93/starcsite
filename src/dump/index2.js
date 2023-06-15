import React, { useRef } from "react"
import Page from "../components/page2"
import { Container } from "../styles/PageLayout"
import { Headline } from "../styles/Typography"
import ImageHeader from "../components/ImageHeader"
import Introduction from "../components/Introduction"
import useIsInViewport from "../hooks/useIsInViewport"
const Home2 = () => {
  const ref1 = useRef(null)

  const isInViewport1 = useIsInViewport(ref1)
  console.log("isInViewport1: ", isInViewport1)
  const navbarIsVisible = !isInViewport1
  return (
    <>
      <Page navbarIsVisible={navbarIsVisible}>
        <div ref={ref1}>
          <ImageHeader />
        </div>
        <Container column justifyContent="space-between">
          <Introduction />
          <Introduction />
        </Container>
      </Page>
    </>
  )
}

export default Home2
