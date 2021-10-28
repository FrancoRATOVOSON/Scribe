import { createElement, ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import BlockType from '../../Utils/BlockType'

interface ContentBlockProps extends HTMLAttributes<HTMLElement> {
  element: BlockType
}

export default forwardRef((props: ContentBlockProps, ref: ForwardedRef<HTMLElement>) => {
  const { element, children, ...eltprops } = props
  return createElement(
    element,
    {
      ref,
      ...eltprops,
    },
    children
  )
})
