// @flow
import guard from '../internalHelpers/_guard'
import parseToHsl from './parseToHsl'
import toColorString from './toColorString'

export default function adjustColor(
  amount: number,
  color: string,
  property: string,
): string {
  if (color === 'transparent') return color
  const hslColor = parseToHsl(color)
  return toColorString({
    ...hslColor,
    [property]: guard(0, 1, hslColor[property] + amount),
  })
}
