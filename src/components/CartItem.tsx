import { Icon } from "@iconify-icon/react"
import { formatPrice } from "../lib/formatPrice"
import type { Product } from "../types"

interface CartItemProps {
  item: Product & { quantity: number }
  onIncrement: (id: number) => void
  onDecrement: (id: number) => void
  onRemove: (id: number) => void
}

const CartItem = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4 p-3">
      <div className="flex items-center gap-3">
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
          <p className="text-sm text-gray-500">{formatPrice(item.price)} ₴</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <button
            onClick={() => onDecrement(item.id)}
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-50 cursor-pointer"
            aria-label="Decrease quantity"
          >
            <Icon
              className="text-md"
              icon="tabler:minus"
            />
          </button>
          <div className="w-8 h-6 flex items-center justify-center border-t border-b border-gray-300 text-sm">
            {item.quantity}
          </div>
          <button
            onClick={() => onIncrement(item.id)}
            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-50 cursor-pointer"
            aria-label="Increase quantity"
          >
            <Icon
              className="text-md"
              icon="tabler:plus"
            />
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="flex items-center justify-center text-red-500 hover:text-red-700 cursor-pointer"
          aria-label="Remove item"
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
