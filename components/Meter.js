import { useMeter } from "@react-aria/meter"
import { useId } from "@react-aria/utils"
import { useNumberFormatter } from "@react-aria/i18n"

import { styled } from "stitches.config"

const MeterInfo = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
})

const MeterContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

const MeterProgressBar = styled("div", {
  p: "$x-small",
  display: "flex",
})

const MeterProgressBarFill = styled("div", {
  height: 16,
  width: "100%",
})

const MeterProgressBarSvg = styled("svg", {
  width: "100%",
  height: "100%",
  borderRadius: 1,
  boxShadow: `
  0 0 0 3px $colors$gray-50,
  0 0 0 4px $colors$gray-300
  `,
})

const MeterLabel = styled("span", {
  textStyle: "$table-head",
  color: "$text-heading",
  mb: "$x-small",
})

const MeterDescription = styled("div", {
  textStyle: "$table-cell",
  color: "$text-heading",
  mt: "$x-small",
})

const MeterMaxValue = styled("div", {
  textStyle: "$table-head",
  color: "$text-heading",
})

function Meter({ label, value, minValue = 0, maxValue, description }) {
  const id = useId()

  const clipPathId = `clip-path-${id}`
  const gradientId = `gradient-${id}`

  const formatOptions = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol"
}

  const descriptionId = description != null ? `description-${id}` : undefined

  let { meterProps, labelProps } = useMeter({
    id,
    label,
    value,
    minValue,
    maxValue,
    formatOptions,
    "aria-describedby": descriptionId,
  })

  let percentage = (value - minValue) / (maxValue - minValue)
  let barWidth = `${Math.round(percentage * 100)}%`

  const formatter = useNumberFormatter(formatOptions)

  return (
    <MeterContainer>
      <MeterInfo>
        <MeterLabel {...labelProps}>{label}</MeterLabel>
        <MeterMaxValue>{formatter.format(maxValue)}</MeterMaxValue>
      </MeterInfo>
      <MeterProgressBar {...meterProps}>
        <MeterProgressBarFill>
          <MeterProgressBarSvg>
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{
                    stopColor: "#4F46E5", // Indigo 600
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "#34D399", // Green 600
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
            </defs>
            <clipPath id={clipPathId}>
              <rect width={barWidth} height="100%" rx="2" />
            </clipPath>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill={`url(#${gradientId})`}
              clipPath={`url(#${clipPathId})`}
            />
          </MeterProgressBarSvg>
        </MeterProgressBarFill>
      </MeterProgressBar>
      <MeterDescription id={descriptionId}>{description}</MeterDescription>
    </MeterContainer>
  )
}

export default Meter
