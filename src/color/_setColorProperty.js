// @flow
import parseToHsl from './parseToHsl'
import toColorString from './toColorString'

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
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
