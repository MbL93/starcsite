import React from "react"
import { ImageHeaderDiv } from "../styles/ImageHeaderLayout"
import { StaticImage } from "gatsby-plugin-image"
import { Headline } from "../styles/Typography"
import "slick-carousel/slick/slick.css"

import "slick-carousel/slick/slick-theme.css"

// const settings = {
//   dots: true,
//   infinite: true,
//   auto: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// }
const ImageHeader = ({ imageTitle }) => {
  return (
    <ImageHeaderDiv>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          ZIndex: "2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          opacity: "99%",
        }}
      >
        {" "}
        <div style={{ position: "relative", zIndex: "1" }}>
          <StaticImage
            src="../assets/images/header.jpg"
            alt="header"
            placeholder="tracedSVG"
            layout="constrained"
            as="div"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          ZIndex: "39",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ textAlign: "center", color: "white" }}>
          <Headline>{imageTitle}</Headline>
        </div>
      </div>
    </ImageHeaderDiv>
  )
}

export default ImageHeader
