import { formatPrice } from "../lib/formatPrice"
import { selectTotalPrice } from "../store/features/cartSlice"
import { useAppSelector } from "../store/hooks"
import type { CartItemType } from "../types"
import CartItem from "./CartItem"

interface CartContentProps {
  cartItems: CartItemType[]
}

const CartContent: React.FC<CartContentProps> = ({ cartItems }) => {
  const totalPrice = useAppSelector(selectTotalPrice)

  return (
    <>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
      <div className="flex items-center justify-between gap-2 px-3 py-4 bg-gray-200 border-t border-gray-300 sticky bottom-0">
        <p className="font-semibold">Total: {formatPrice(totalPrice)} ₴</p>
        <button className="btn px-2 py-1 border border-gray-900 rounded-md text-nowrap cursor-pointer hover:bg-gray-900/10 transition-colors duration-200">
          Checkout
        </button>
      </div>
    </>
  )
}

export default CartContent
