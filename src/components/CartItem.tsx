import { Icon } from "@iconify-icon/react"
import { calculateItemPrice } from "../lib/calculateItemPrice"
import { formatPrice } from "../lib/formatPrice"
import {
  decrementQuantity,
  incrementQuantity,
  removeCartItem,
} from "../store/features/cartSlice"
import { useAppDispatch } from "../store/hooks"
import type { CartItemType } from "../types"

interface CartItemProps {
  item: CartItemType
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch()

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id))
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.id))
  }

  const handleRemove = () => {
    dispatch(removeCartItem(item.id))
  }

  return (
    <div className="flex items-center justify-between gap-4 p-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500">
            {formatPrice(calculateItemPrice(item.price, item.quantity))} ₴
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <button
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-l-md hover:not-disabled:bg-gray-50 cursor-pointer"
            aria-label="Decrease quantity"
            disabled={item.quantity === 1}
            onClick={handleDecrement}
          >
            <Icon
              className={`text-md ${item.quantity === 1 ? "opacity-50" : ""}`}
              icon="tabler:minus"
            />
          </button>
          <div className="w-8 h-6 flex items-center justify-center border-t border-b border-gray-300 text-sm">
            {item.quantity}
          </div>
          <button
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-50 cursor-pointer"
            aria-label="Increase quantity"
            onClick={handleIncrement}
          >
            <Icon
              className="text-md"
              icon="tabler:plus"
            />
          </button>
        </div>
        <button
          className="flex items-center justify-center text-red-500 hover:text-red-700 cursor-pointer"
          aria-label="Remove item"
          onClick={handleRemove}
        >
          <Icon
            className="text-xl"
            icon="tabler:trash"
          />
        </button>
      </div>
    </div>
  )
}

export default CartItem
