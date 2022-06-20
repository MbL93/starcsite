import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsInstagram } from "react-icons/bs"
import "../assets/css/main.css"
import {
  StyledHeader,
  HeaderDiv,
  LinkDiv,
  LogoDiv,
  StyledLink,
  ContentDiv,
  StyledA,
} from "../styles/HeaderLayout"

const Header = () => {
  return (
    <StyledHeader>
      <HeaderDiv>
        <ContentDiv>
          <LogoDiv>
            <Link to="/" className="header-img">
              <StaticImage
                src="../assets/images/logo.png"
                alt="logo"
                placeholder="tracedSVG"
                layout="constrained"
                as="section"
                height={60}
              />
            </Link>
          </LogoDiv>
          <LinkDiv>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">Über uns</StyledLink>
            <StyledLink to="/stories">Geschichten</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/services">Leistungen</StyledLink>
            <StyledLink to="/contact">Kontakt</StyledLink>
            <StyledA href="https://instagram.com">
              <BsInstagram />
            </StyledA>
          </LinkDiv>
        </ContentDiv>
      </HeaderDiv>
    </StyledHeader>
  )
}

export default Header
