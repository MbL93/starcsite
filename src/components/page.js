import React from "react"
import { PageLayout } from "../styles/PageLayout"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "./header"
import Footer from "./footer"
import SEO from "./SEO"

const Page = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </>
  )
}

export default Page
