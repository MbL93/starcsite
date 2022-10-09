import React, { useRef } from "react"
import { PageLayout } from "../styles/PageLayout"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "./header"
import Footer from "./footer"
import Seo from "./Seo"
import ImageHeader from "./ImageHeader"
import useIsInViewport from "../hooks/useIsInViewport"
import { Container } from "../styles/PageLayout"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

function executeScroll() {
  console.log("h23i")
  scroll.scrollMore(100)
}

const Page = ({ children }) => {
  const imageHeaderRef = useRef(null)
  const containerStartRef = useRef(null)

  // containerStartRef.current.scrollIntoView()

  const isInViewport1 = useIsInViewport(imageHeaderRef)
  console.log("isInViewport1: ", isInViewport1)
  const navbarIsVisible = !isInViewport1

  return (
    <>
      <Seo />
      <GlobalStyles />
      <Header navbarIsVisible={navbarIsVisible} />
      <PageLayout>
        <div ref={imageHeaderRef} onWheel={executeScroll}>
          <ImageHeader />
        </div>
        <Element id="myScrollToElement" name="myScrollToElement">
          <Container
            column
            justifyContent="space-between"
            ref={containerStartRef}
          >
            {children}
          </Container>
        </Element>
      </PageLayout>

      <Footer />
    </>
  )
}

export default Page
