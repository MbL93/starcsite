import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { StyledButton } from "../styles/ButtonLayout"
import { Headline, Title, Subtitle, Paragraph } from "../styles/Typography"
import { Divider } from "@mui/material"
export default function Introduction() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "140px",
      }}
    >
      <div style={{ width: "100%" }}>
        <Divider></Divider>
      </div>
      <div style={{ padding: "60px", "paddingTop": "19px" }}>
        <Headline>ÜBER UNS</Headline>
        <Divider></Divider>
      </div>
      <div
        id="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div id="item1" style={{ flex: "0 0 48%", alignSelf: "flexStart" }}>
          <StaticImage
            src="../assets/images/header.jpg"
            alt="header"
            placeholder="tracedSVG"
            layout="constrained"
            as="div"
          />
        </div>
        <div
          id="item2"
          style={{
            flex: "0 0 48%",
          }}
        >
          <div
            style={{
              marginBottom: "5px",
              textAlign: "center",
            }}
          >
            <Title>Wir sind Stefan und Marc.</Title>
          </div>
          <div
            style={{
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            <Subtitle>
              Deine Hochzeitsfotografen für jeden Schahahaheoeowieie.
              <Divider>CENTER</Divider>
            </Subtitle>
          </div>
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <Paragraph>
              Wir bieten euch authentische Hochzeitsfotografie, die euch so
              zeigt wie euch eure Familie und Freunde kennen,- ehrlich und
              ungestellt. Eines vorweg, wir wollen mehr als nur eure Fotografen
              sein. Und warum? Weil wir die Freude, die Aufregung, die Spannung
              und die Gefühle an diesem Tag schlichtweg lieben. Wir fiebern und
              jubeln mit euch und haben gemeinsam eine Wahnsinns Zeit. Uns geht
              es nicht um Perfektion. Wir konzentrieren uns auf eure Liebe,
              finden eure Emotionen und erzählen eure Geschichte.Wir fiebern und
              jubeln mit euch und haben gemeinsam eine Wahnsinns Zeit. Uns geht
              es nicht um Perfektion. Wir konzentrieren uns auf eure Liebe.
            </Paragraph>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <StyledButton>
              <Link to="/about">Mehr über uns</Link>
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  )
}
