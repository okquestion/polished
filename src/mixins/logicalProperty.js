// @flow
import type { Style } from '../types/style'
import capitalizeString from '../internalHelpers/_capitalizeString'

const boxMap = {
  top: 'block-start',
  right: 'inline-end',
  bottom: 'block-end',
  left: 'inline-start',
}

const dimensionMap = {
  height: 'blockSize',
  width: 'inlineSize',
  minHeight: 'minBlockSize',
  maxHeight: 'maxBlockSize',
  minWidth: 'minInlineSize',
  maxWidth: 'maxInlineSize',
}

const baseMap = {
  horizontal: 'inline',
  vertical: 'block',
  right: 'end',
  left: 'start',
}

function camelcaseProperty(property: string) {
  const splitProperty = property.split('-')
  if (splitProperty.length > 1) {
    return splitProperty.reduce((acc, val) => `${acc}${capitalizeString(val)}`)
  }
  return property
}

export default function logicalProperty(
  property: string | Style,
  value?: string | number,
): Array<Style> {
  const camelcasedProperty = camelcaseProperty(property)

  let newProperty
  let newValue

  switch (camelcasedProperty) {
    case 'captionSide':
    case 'clear':
    case 'float':
      newProperty = camelcasedProperty
      newValue = boxMap[value]
      break
    case 'textAlign':
    case 'resize':
      newProperty = camelcasedProperty
      newValue = baseMap[value]
      break
    case 'height':
    case 'width':
      newProperty = dimensionMap[camelcasedProperty]
      newValue = value
      break
    case 'minHeight':
    case 'minWidth':
    case 'maxHeight':
    case 'maxWidth':
      newProperty = dimensionMap[camelcasedProperty]
      newValue = value
      break
    default:
      break
  }

  return [
    {
      [camelcasedProperty]: value,
    },
    {
      [newProperty]: newValue,
    },
  ]
}
