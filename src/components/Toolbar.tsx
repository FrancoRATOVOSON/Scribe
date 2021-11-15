import React from 'react'
import { ButtonActionType } from '../utils/types'

interface ToolbarPropType {
  className?: string
  // blockTypes: BlockType[]
  // styleTypes: StyleType[]
  toogleStyle: ButtonActionType
  toogleBlock: ButtonActionType
}

export default function Toolbar(props: ToolbarPropType) {
  const { className, toogleStyle, toogleBlock } = props
  return <div className={className} />
}
