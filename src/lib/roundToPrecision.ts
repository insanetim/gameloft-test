export const roundToPrecision = (
  value: number,
  precision: number = 2
): number => {
  const factor = Math.pow(10, precision)
  return Math.round(value * factor) / factor
}
