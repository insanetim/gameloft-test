import { roundToPrecision } from "./roundToPrecision"

export const calculateItemPrice = (
  price: number,
  quantity: number,
  bulkThreshold: number = 5,
  discountPercent: number = 10
) => {
  const discountMultiplier =
    quantity > bulkThreshold ? 1 - discountPercent / 100 : 1

  const total = price * quantity * discountMultiplier

  return roundToPrecision(total)
}
