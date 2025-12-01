import { Icon } from "@iconify-icon/react"
import { useEffect, useRef, useState } from "react"
import {
  selectCartItems,
  selectTotalQuantity,
} from "../store/features/cartSlice"
import { useAppSelector } from "../store/hooks"
import CartContent from "./CartContent"
import CartEmpty from "./CartEmpty"

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems)
  const totalQuantity = useAppSelector(selectTotalQuantity)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      <button
        onClick={toggleDropdown}
        className="relative flex items-center gap-2 px-2 py-1 border border-white rounded-md text-white text-nowrap cursor-pointer hover:bg-white/10 transition-colors duration-200"
      >
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full h-5 min-w-5 flex items-center justify-center p-1">
            {totalQuantity}
          </span>
        )}
        <Icon
          className="text-xl"
          icon="tabler:shopping-cart"
        />
        Cart
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[400px] max-w-[calc(100vw-1rem)] max-h-[474px] overflow-auto bg-gray-200 rounded-md shadow-lg py-1 z-10">
          {cartItems.length > 0 ? (
            <CartContent cartItems={cartItems} />
          ) : (
            <CartEmpty />
          )}
        </div>
      )}
    </div>
  )
}

export default Cart
