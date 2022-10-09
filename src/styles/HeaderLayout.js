import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.div`
  width: 100%;
  line-height: 80px;
  height: 80px !important;
  border-bottom: 1px solid #dddddd;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  overflow: hidden;
  background-color: #f4f4f4;
  box-shadow: 0 0 transparent, 0 0 transparent, 0 5px 5px -4px rgb(0 0 0 / 10%);
`
const HeaderDiv = styled.div`
  max-width: 1200px;
  margin: auto;
  box-sizing: border-box;
`

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`
const LogoDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`
const LinkDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`
const StyledLink = styled(Link)`
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  &:hover {
    color: grey;
  }
`

const StyledA = styled.a`
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  &:hover {
    color: grey;
  }
`

export {
  StyledHeader,
  HeaderDiv,
  LinkDiv,
  LogoDiv,
  StyledLink,
  ContentDiv,
  StyledA,
}
