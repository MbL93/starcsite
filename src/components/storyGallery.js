import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StyledButton } from "../styles/ButtonLayout"
import { Headline, Title, Subtitle } from "../styles/Typography"
import { Divider } from "@mui/material"
import { graphql } from "gatsby"
import { Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  StoryGalleryContainer,
  StoryGalleryImage,
  StoryGalleryItem,
} from "../styles/StoryGalleryLayout"

import slugify from "slugify"

const StoryGallery = () => {
  const data = useStaticQuery(query)
  const stories = data.allContentfulStory.nodes
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
      <div style={{ padding: "60px", "padding-top": "19px" }}>
        <Headline>ERINNERUNGEN</Headline>
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
        <div id="item1">
          <StoryGalleryContainer>
            {stories.map(story => {
              const { id, title, leadimage } = story
              const pathToImage = getImage(leadimage)
              const slug = slugify(title, { lower: true })
              return (
                <>
                  <StoryGalleryItem>
                    <Link
                      key={id}
                      to={`/${slug}`}
                      style={{ overflow: "hidden" }}
                    >
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        style={{ overflow: "hidden", height: "85%" }}
                      />
                      <h5 style={{ "text-align": "center" }}>{title}</h5>
                    </Link>
                  </StoryGalleryItem>
                  <StoryGalleryItem>
                    <Link
                      key={id}
                      to={`/${slug}`}
                      style={{ overflow: "hidden" }}
                    >
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        style={{ overflow: "hidden", height: "85%" }}
                      />
                      <h5 style={{ "text-align": "center" }}>{title}</h5>
                    </Link>
                  </StoryGalleryItem>
                  <StoryGalleryItem>
                    <Link
                      key={id}
                      to={`/${slug}`}
                      style={{ overflow: "hidden" }}
                    >
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        style={{
                          overflow: "hidden",
                          height: "85%",
                        }}
                      />
                      <h5 style={{ "text-align": "center" }}>{title}</h5>
                    </Link>
                  </StoryGalleryItem>
                </>
              )
            })}
          </StoryGalleryContainer>
        </div>
      </div>
    </div>
  )
}

const query = graphql`
  {
    allContentfulStory {
      nodes {
        id
        leadimage {
          gatsbyImageData
        }
        title
      }
    }
  }
`

export default StoryGallery
