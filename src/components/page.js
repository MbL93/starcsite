import React from "react"
import { PageLayout } from "../styles/PageLayout"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "./header"
import Footer from "./footer"
import Seo from "./Seo"
import { Container } from "../styles/PageLayout"

// function executeScroll() {
//   console.log("h23i")
//   scroll.scrollMore(100)
// }

// const Page = ({ children }) => {
//   const imageHeaderRef = useRef(null)
//   const containerStartRef = useRef(null)

//   const isInViewport1 = useIsInViewport(imageHeaderRef)
//   console.log("isInViewport1: ", isInViewport1)
//   const navbarIsVisible = false

//   return (
//     <>
//       <Seo />
//       <GlobalStyles />
//       <Header navbarIsVisible={navbarIsVisible} />
//       <PageLayout>
//          <div ref={imageHeaderRef} onWheel={executeScroll}>
//           <ImageHeader />
//         </div>
//         <Element id="myScrollToElement" name="myScrollToElement">
//         <Container
//           column
//           justifyContent="space-between"
//           ref={containerStartRef}
//         >
//           {children}
//         </Container>
//  </Element>
//       </PageLayout>

//       <Footer />
//     </>
//   )
// }
const Page = ({ children }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <Header navbarIsVisible={false} />
      <PageLayout>
        <Container column justifyContent="space-between">
          {children}
        </Container>
      </PageLayout>
      <Footer />
    </>
  )
}
export default Page
