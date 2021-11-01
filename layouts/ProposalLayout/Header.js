import { styled } from "stitches.config"

import Logo from "./Logo"

const HeaderContainer = styled("div", {
  py: "$regular",
  maxWidth: 920,
  width: "100%",
})

const HeaderContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-end",
})

const HeaderLogo = styled("div", {
  display: "flex",
  alignItems: "stretch",
  flexGrow: 0,
  flexShrink: 1,
  width: "100%",
  maxWidth: 172,
  height: 48,
  justifyContent: "stretch",

  '@bp1': {
    maxWidth: 194,
    height: 54,  
  }
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
