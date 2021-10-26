import { createStitches } from "@stitches/react"

const { styled, css, getCssText, globalCss, theme } = createStitches({
  theme: {
    colors: {
      "indigo-50": "#EEF2FF",
      "indigo-100": "#E0E7FF",
      "indigo-200": "#C7D2FE",
      "indigo-300": "#A5B4FC",
      "indigo-400": "#818CF8",
      "indigo-500": "#6366F1",
      "indigo-600": "#4F46E5",
      "indigo-700": "#4338CA",
      "indigo-800": "#3730A3",
      "indigo-900": "#312E81",

      "green-50": "#ECFDF5",
      "green-100": "#D1FAE5",
      "green-200": "#A7F3D0",
      "green-300": "#6EE7B7",
      "green-400": "#34D399",
      "green-500": "#10B981",
      "green-600": "#059669",
      "green-700": "#047857",
      "green-800": "#065F46",
      "green-900": "#064E3B",

      "gray-50": "#F9FAFB",
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-300": "#D1D5DB",
      "gray-400": "#9CA3AF",
      "gray-500": "#6B7280",
      "gray-600": "#4B5563",
      "gray-700": "#374151",
      "gray-800": "#1F2937",
      "gray-900": "#111827",

      "text-header": "#171A23",
      "text-body": "#404553",
      "text-subtle": "#687682",
    },
    space: {
      none: "0px",
      "xx-small": "2px",
      "x-small": "4px",
      small: "8px",
      regular: "16px",
      large: "32px",
      "x-large": "64px",
      "xx-large": "128px",
    },
    fonts: {
      header: "'Poppins', sans-serif",
      default: "'Lato', sans-serif",
      mono: "'IBM Plex Mono', monospace",
    },
    fontSizes: {
      "header-1": "44px",
      "header-2": "28px",
      "header-3": "23px",
      "header-4": "19px",
      "header-5": "17px",
      "body-intro": "24px",
      body: "20px",
      "body-secondary": "16px",
      "body-compact": "12px",
      "table-head": "18px",
      "table-cell": "14px",
    },
    fontWeights: {
      "extra-bold": 800,
      bold: 700,
      "semi-bold": 600,
      medium: 500,
      regular: 400,
    },
    lineHeights: {
      "header-1": 1.2,
      "header-2": 1.3,
      "header-3": 1.2,
      "header-4": 1.1,
      "header-5": 1.1,
      "body-intro": 1.5,
      body: 1.5,
      "body-secondary": 1.5,
      "body-compact": 1.3,
    },
  },
  utils: {
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    textStyle: (value) =>
    ({
      "$header-1": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$extra-bold",
        letterSpacing: "-0.015em",
        fontFamily: "$header",
        color: "$text-header",
      },
      "$header-2": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$bold",
        letterSpacing: "-0.015em",
        fontFamily: "$header",
        color: "$text-header",
      },
      "$header-3": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$semi-bold",
        fontFamily: "$header",
        color: "$text-header",
      },
      "$header-4": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$semi-bold",
        fontFamily: "$header",
        color: "$text-header",
      },
      "$header-5": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$medium",
        fontFamily: "$header",
        color: "$text-header",
      },
      "$action": {
        fontSize: '$body-secondary',
        lineHeight: '$body-secondary',
        fontFamily: '$mono',
        fontWeight: '$bold',
      },
      "$body-intro": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$regular",
        fontFamily: "$default",
        color: "$text-body",
      },
      $body: {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$regular",
        fontFamily: "$default",
        color: "$text-body",
      },
      "$body-secondary": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$regular",
        fontFamily: "$default",
        color: "$text-body",
      },
      "$body-compact": {
        fontSize: value,
        lineHeight: value,
        fontWeight: "$regular",
        fontFamily: "$default",
        color: "$text-body",
      },
      "$table-head": {
        fontSize: value,
        fontWeight: "$bold",
        fontFamily: "$mono",
        color: "$text-header",
      },
      "$table-cell": {
        fontSize: value,
        fontWeight: "$regular",
        fontFamily: "$mono",
        color: "$text-subtle",
      },
    }
    [value]),
  },
})

export { styled, css, getCssText, globalCss, theme }
