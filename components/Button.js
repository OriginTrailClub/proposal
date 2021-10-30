import * as React from "react";

import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";

import VisuallyHidden from "components/VisuallyHidden";
import mergeRefs from "utils/mergeRefs";

import { styled } from "stitches.config";

const ButtonLabel = styled("span", {
  color: "CurrentColor",
  fontSize: "$body-secondary",
  lineHeight: "$body-secondary",
  fontFamily: "$mono",
  fontWeight: "$bold",
  padding: "$x-small",
});

const ButtonIcon = styled("span", {
  padding: "$x-small",
  color: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$lineHeights$body-secondary",
  height: "$lineHeights$body-secondary",
});

const ButtonContainer = styled("button", {
  border: "none",
  padding: "$small",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: 'none',

  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "transparent",

  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "$indigo-600",
        borderColor: "$indigo-300",
        "&:hover": {
          backgroundColor: "$indigo-500",
          borderColor: "$indigo-100",
        },
        "&:active": {
          backgroundColor: "$indigo-700",
          borderColor: "$indigo-100",
        },
      },
      secondary: {
        color: "$indigo-600",
        backgroundColor: "transparent",
        borderColor: "$indigo-200",
        "&:hover": {
          backgroundColor: "$indigo-50",
          borderColor: "$indigo-100",
        },
        "&:active": {
          backgroundColor: "$indigo-100",
          borderColor: "$indigo-100",
        },
      },
      tertiary: {
        color: "$indigo-600",
        backgroundColor: "transparent",
        borderColor: "0 0 0 1px transparent",
        "&:hover": {
          backgroundColor: "$indigo-50",
          borderColor: "$indigo-100",
        },
        "&:active": {
          backgroundColor: "$indigo-100",
          borderColor: "$indigo-100",
        },
      },
    },
  },
});

const Button = React.forwardRef(function Button(props, ref) {
  const { as = "button", Icon, label, hideLabel, variant } = props;

  const domRef = React.useRef();

  const { buttonProps } = useButton({ elementType: as, ...props }, domRef);
  const { hoverProps } = useHover({});

  return (
    <ButtonContainer
      as={as}
      {...mergeProps(buttonProps, hoverProps)}
      ref={mergeRefs([ref, domRef])}
      tabIndex={0}
      variant={variant || "primary"}
    >
      {hideLabel ? (
        <VisuallyHidden>{label}</VisuallyHidden>
      ) : (
        <ButtonLabel>{label}</ButtonLabel>
      )}
      {Icon ? <ButtonIcon as={Icon} /> : null}
    </ButtonContainer>
  );
});

export default Button;
