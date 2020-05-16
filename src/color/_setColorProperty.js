// @flow
import parseToHsl from './parseToHsl'
import toColorString from './toColorString'

export default function setColorProperty(
  amount: number | string,
  color: string,
  property: string,
): string {
  if (color === 'transparent') return color
  return toColorString({
    ...parseToHsl(color),
    [property]: parseFloat(amount),
  })
}
