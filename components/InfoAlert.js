import useFindElementOfType from "hooks/useFindElementOfType"

import { styled } from "stitches.config"

const AlertContainer = styled("div", {
  backgroundColor: "$indigo-50",
  p: "$regular",
  display: "flex",
  flexDirection: "row",
})

const AlertContentContainer = styled("section", {
  textStyle: "$body",
  color: "$indigo-900",
})

const AlertIconContainer = styled("div", {
  width: 24,
  height: 24,
  flexShrink: 0,
  flexGrow: 0,
  color: "$indigo-700",
  mr: '$regular',
})

function AlertContent({ children }) {
  return <AlertContentContainer>{children}</AlertContentContainer>
}

function AlertIcon({ Icon }) {
  return <AlertIconContainer as={Icon} />
}

function Alert({ children }) {
  const Icon = useFindElementOfType(children, AlertIcon)
  const Content = useFindElementOfType(children, AlertContent)

  return (
    <AlertContainer>
      {Icon}
      {Content}
    </AlertContainer>
  )
}

Alert.Content = AlertContent
Alert.Icon = AlertIcon

export default Alert
