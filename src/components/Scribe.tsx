import React, { createRef, useState, KeyboardEvent } from 'react'
import { DraftEditorCommand, DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js'
import { contentStateFrom } from '../utils'
import { IInitialSourceType } from '../utils/types'

// TODO Add inline shortcuts and toolbar and saving function
interface ScribePropType {
  initialSource?: IInitialSourceType
  placeholder?: string
  // toolBar?: boolean
  // inlineShortcuts?: boolean | 'block' | 'styles'
  // inlineToolBar?: boolean
  className?: string
  editorClassName?: string
  // toolbarClassName?: string
  // inlineToolbarClassName?: string
  // savingFn?: (_editorRaw: RawDraftContentState) => void
}

export default function Scribe(props: ScribePropType) {
  const {
    initialSource,
    placeholder,
    // toolBar,
    // inlineShortcuts,
    // inlineToolBar,
    className,
    editorClassName,
    // toolbarClassName,
    // inlineToolbarClassName,
    // savingFn,
  } = props

  // Seting up the editor state
  const initialContentState = initialSource ? contentStateFrom(initialSource) : undefined
  const initialEditorState = initialContentState
    ? () => EditorState.createWithContent(initialContentState)
    : () => EditorState.createEmpty()
  const [editorState, setEditorState] = useState(initialEditorState)
  const editorRef = createRef<Editor>()

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorstate: EditorState
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorstate, command)

    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const handleReturn = (e: KeyboardEvent, editorstate: EditorState) => {
    if (e.shiftKey) {
      setEditorState(RichUtils.insertSoftNewline(editorstate))
      return 'handled'
    }
    return 'not-handled'
  }

  const toggleInlineStyle = (style: string) =>
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))

  const toggleBlockType = (block: string) =>
    setEditorState(RichUtils.toggleBlockType(editorState, block))

  return (
    <div className={className}>
      <div className={editorClassName}>
        <Editor
          ref={editorRef}
          editorState={editorState}
          onChange={setEditorState}
          placeholder={placeholder}
          handleKeyCommand={handleKeyCommand}
          handleReturn={handleReturn}
        />
      </div>
    </div>
  )
}
