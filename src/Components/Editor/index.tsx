import React, { createRef, HTMLAttributes, KeyboardEvent } from 'react'
import ContentBlock from '../ContentBlock'

import './styles.css'

interface EditorProps extends HTMLAttributes<HTMLDivElement> {}

export default function Editor(props: EditorProps) {
  const { onChange, className } = props
  const blockRef = createRef<HTMLElement>()

  const handleKeyboardEvents = (ev: KeyboardEvent) => {
    const { key } = ev

    switch (key) {
      case 'Backspace':
        if (blockRef.current?.firstChild?.textContent === '') ev.preventDefault()
        break
      default:
        break
    }
  }

  return (
    <div
      className={`editor${className ? ` ${className}` : ''}`}
      tabIndex={0}
      role="textbox"
      contentEditable
      suppressContentEditableWarning
      onChange={onChange}
      onKeyDown={handleKeyboardEvents}
    >
      <ContentBlock ref={blockRef} element="p" className="editor-content">
        Write here
      </ContentBlock>
    </div>
  )
}
