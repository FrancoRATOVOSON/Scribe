import { ContentState, convertFromHTML, convertFromRaw } from 'draft-js'
import { IInitialSourceType, SourceType } from './types'

export const test = 'test'

export function contentStateFrom(initialSource: IInitialSourceType): ContentState | undefined {
  const { sourceType, value } = initialSource

  if (typeof value === 'string') {
    if (sourceType === SourceType.HTML) {
      const blockFromHTML = convertFromHTML(value)
      return ContentState.createFromBlockArray(blockFromHTML.contentBlocks, blockFromHTML.entityMap)
    }
    if (sourceType === SourceType.TEXT) return ContentState.createFromText(value)
    return undefined
  }
  return convertFromRaw(value)
}
