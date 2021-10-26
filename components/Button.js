import * as React from "react"

import { useButton } from "@react-aria/button"
import { useHover } from "@react-aria/interactions"
import { mergeProps } from "@react-aria/utils"

import VisuallyHidden from "components/VisuallyHidden"
import mergeRefs from "utils/mergeRefs"

import { styled } from "stitches.config"

const ButtonLabel = styled("span", {
  color: "CurrentColor",
  fontSize: "$body-secondary",
  lineHeight: "$body-secondary",
  fontFamily: "$mono",
  fontWeight: "$bold",
  padding: "$x-small",
})

const ButtonIcon = styled("span", {
  padding: "$x-small",
  color: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$lineHeights$body-secondary",
  height: "$lineHeights$body-secondary",
})

const ButtonContainer = styled("button", {
  border: "none",
  padding: "$small",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "$indigo-600",
        boxShadow: "0 0 0 1px $colors$indigo-300",
        "&:hover": {
          backgroundColor: "$indigo-500",
          boxShadow: "0 0 0 1px $colors$indigo-100",
        },
        "&:active": {
          backgroundColor: "$indigo-700",
          boxShadow: "0 0 0 1px $colors$indigo-100",
        },
      },
      secondary: {
        color: "$colors$indigo-600",
        backgroundColor: "transparent",
        boxShadow: "0 0 0 1px $colors$indigo-200",
        "&:hover": {
          backgroundColor: "$indigo-50",
          boxShadow: "0 0 0 1px $colors$indigo-100",
        },
        "&:active": {
          backgroundColor: "$indigo-100",
          boxShadow: "0 0 0 1px $colors$indigo-100",
        },
      },
      tertiary: {
        color: "$colors$indigo-600",
        backgroundColor: "transparent",
        boxShadow: "0 0 0 1px transparent",
        "&:hover": {
          backgroundColor: "$indigo-50",
          boxShadow: "0 0 0 1px $colors$indigo-100",
        },
        "&:active": {
          backgroundColor: "$indigo-100",
          boxShadow: "0 0 0 1px $colors$indigo-100",
        },
      },
    },
  },
})

const Button = React.forwardRef(function Button(props, ref) {
  const {
    as: ElementType = "button",
    Icon,
    label,
    hideLabel,
    variant,
  } = props

  const domRef = React.useRef()

  const { buttonProps } = useButton(props, domRef)
  const { hoverProps } = useHover({})

  return (
    <ButtonContainer
      as={ElementType}
      {...mergeProps(
        buttonProps,
        hoverProps,
      )}
      ref={mergeRefs([ref, domRef])}
      tabIndex={0}
      variant={variant || "primary"}
    >
      {hideLabel ? <VisuallyHidden>{label}</VisuallyHidden> : <ButtonLabel>{label}</ButtonLabel>}
      {Icon ? <ButtonIcon as={Icon} /> : null}
    </ButtonContainer>
  )
})

export default Button
