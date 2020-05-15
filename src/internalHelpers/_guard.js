// @flow
export default function guard(
  lowerBoundary: number,
  upperBoundary: number,
  value: number,
): number {
  return Math.min(Math.max(lowerBoundary, value), upperBoundary)
}
