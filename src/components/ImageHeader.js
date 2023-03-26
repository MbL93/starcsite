import React from "react"
import { ImageHeaderDiv, ImageHeading1 } from "../styles/ImageHeaderLayout"
import { StaticImage } from "gatsby-plugin-image"
import { Headline } from "../styles/Typography"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  auto: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
const ImageHeader = ({ imageTitle}) => {
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
          opacity: "40%",
          backgroundColor: "black",
        }}
      ></div>
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
        {" "}
        <div style={{ textAlign: "center", color: "white" }}>
          <Headline>
            {imageTitle}
          </Headline>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          <StaticImage
            src="../assets/images/header.jpg"
            alt="header"
            placeholder="tracedSVG"
            layout="fullWidth"
            as="div"
          />
        </Slider>
      </div>
    </ImageHeaderDiv>
  )
}

export default ImageHeader
