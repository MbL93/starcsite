import React from "react"
import Page from "../components/Page"
import { Container } from "../styles/PageLayout"
import { Headline } from "../styles/Typography"

export default function Home() {
  return (
    <Page>
      <Container>
        <Headline>Hi!</Headline>
      </Container>
    </Page>
  )
}
