import { RawDraftContentState } from 'draft-js'

export enum SourceType {
  HTML = 'HTML',
  TEXT = 'Text',
  RAW = 'Raw',
}

export enum ToolButtonType {
  BLOCK = 'block',
  STYLE = 'style'
}

export type ButtonActionType = (_action: string) => any

export interface IInitialSourceType {
  sourceType: SourceType
  value: string | RawDraftContentState
}

export interface IToolActionType {
  label: string
  type: ToolButtonType
  style: string
}
