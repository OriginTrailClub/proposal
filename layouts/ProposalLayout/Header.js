import { styled } from "stitches.config"

import Logo from "./Logo"

const HeaderContainer = styled("div", {
  py: "$regular",
  maxWidth: 1234,
  width: "100%",
})

const HeaderContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  maxHeight: 48,
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
})

const HeaderLogo = styled("div", {
  display: "flex",
  alignItems: "stretch",
  flexGrow: 0,
  flexShrink: 1,
  width: "100%",
  maxWidth: 190,
  height: 32,
  justifyContent: "stretch",
})

const HeaderCta = styled('div', {
  flexShrink: 0,
})

function Header({ CallToAction }) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>

        <HeaderCta>{CallToAction}</HeaderCta>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
