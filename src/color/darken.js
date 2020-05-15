// @flow
import adjustColor from './_adjustColor'
import curry from '../internalHelpers/_curry'

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
function darken(amount: number | string, color: string): string {
  return adjustColor(parseFloat(amount) * -1, color, 'lightness')
}

// prettier-ignore
const curriedDarken = curry/* ::<number | string, string, string> */(darken)
export default curriedDarken
