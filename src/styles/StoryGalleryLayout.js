import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StoryGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 50px;
`
const StoryGalleryItem = styled.div`
  height: 300px;
  overflow: "hidden";
  box-shadow: 0 40px 50px -40px #000;
  margin: 20px;
`
const StoryGalleryImage = styled(GatsbyImage)``

export { StoryGalleryContainer, StoryGalleryItem, StoryGalleryImage }
