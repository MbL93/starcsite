import React from "react"
import { PageLayout } from "../styles/PageLayout"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/Seo"

const Page2 = ({ children, navbarIsVisible }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <Header navbarIsVisible={navbarIsVisible} />
      <PageLayout>{children}</PageLayout>

      <Footer />
    </>
  )
}

export default Page2
