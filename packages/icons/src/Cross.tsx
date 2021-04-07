import * as React from "react"
import { IconProps } from "./shared"
import { VantIcon } from "./vant"

export default function Cross(props: IconProps) {
  const { ...rest } = props
  return (
    <VantIcon children="cross" {...rest} />
  )
}
