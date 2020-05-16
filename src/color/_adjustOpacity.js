// @flow
import guard from '../internalHelpers/_guard'
import rgba from './rgba'
import parseToRgb from './parseToRgb'

export default function opacify(amount: number, color: string): string {
  if (color === 'transparent') return color
  const parsedColor = parseToRgb(color)
  const alpha: number = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1
  const colorWithAlpha = {
    ...parsedColor,
    alpha: guard(0, 1, (alpha * 100 + amount * 100) / 100),
  }
  return rgba(colorWithAlpha)
}
