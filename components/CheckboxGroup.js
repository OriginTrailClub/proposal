import * as React from "react"

import { styled } from "stitches.config"

import { useCheckboxGroupState } from "@react-stately/checkbox"
import { useCheckboxGroup, useCheckboxGroupItem } from "@react-aria/checkbox"

import VisuallyHidden from "components/VisuallyHidden"

const CheckboxGroupContext = React.createContext(null)

const CheckboxContainer = styled("label", {
  display: "flex",
  alignItems: "center",
})

const CheckboxLabel = styled("span", {
  textStyle: "$body-secondary",
})

const CheckboxInput = styled("input", {
  border: 0,
  clip: "rect(1px, 1px, 1px, 1px)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: 1,
})

const CheckboxBox = styled("div", {
  display: "flex",
  width: 24,
  height: 24,
  boxShadow: "inset 0 0 0 1px $colors$indigo-600",
  alignItems: "center",
  justifyContent: "center",
  my: "$small",
  mr: "$small",

  "&:first-child": {
    mt: 0,
  },
  "&:last-child": {
    mb: 0,
  },

  " > svg": {
    opacity: 0,
  },

  variants: {
    selected: {
      true: {
        backgroundColor: "$indigo-600",
        color: "white",
        " > svg": {
          opacity: 1,
        },
      },
    },
    disabled: {
      true: {
        boxShadow: "inset 0 0 0 1px $colors$gray-300",
      },
    },
  },
  compoundVariants: [
    {
      selected: true,
      disabled: true,
      css: {
        color: "$gray-600",
        backgroundColor: "$gray-300",
      },
    },
  ],
})

function Checkbox(props) {
  let { label } = props
  let state = React.useContext(CheckboxGroupContext)
  let ref = React.useRef()
  let { inputProps } = useCheckboxGroupItem(
    {
      "aria-label": label,
      ...props,
    },
    state,
    ref
  )

  let isDisabled = state.isDisabled || props.isDisabled
  let isSelected = state.isSelected(props.value)

  return (
    <CheckboxContainer>
      <CheckboxInput {...inputProps} ref={ref} />
      <CheckboxBox selected={isSelected} disabled={isDisabled}>
        <svg width={14} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M.75 6.866l2.59 3.548a2 2 0 003.26-.043L13.25.75"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CheckboxBox>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  )
}

const CheckboxGroupContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

function CheckboxGroup(props) {
  let { children, label, hideLabel } = props
  let state = useCheckboxGroupState(props)
  let { groupProps, labelProps } = useCheckboxGroup(props, state)

  return (
    <CheckboxGroupContext.Provider value={state}>
      <CheckboxGroupContainer {...groupProps}>
        {hideLabel ? (
          <VisuallyHidden {...labelProps}>{label}</VisuallyHidden>
        ) : (
          <span {...labelProps}>{label}</span>
        )}
        {children}
      </CheckboxGroupContainer>
    </CheckboxGroupContext.Provider>
  )
}

CheckboxGroup.Checkbox = Checkbox

export default CheckboxGroup
