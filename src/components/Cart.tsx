import { Icon } from "@iconify-icon/react"
import { useEffect, useRef, useState } from "react"
import { PRODUCTS } from "../constants"
import { formatPrice } from "../lib/formatPrice"
import CartItem from "./CartItem"

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-2 py-1 border border-white rounded-md text-white text-nowrap cursor-pointer hover:bg-white/10 transition-colors duration-200"
      >
        <Icon
          className="text-xl"
          icon="tabler:shopping-cart"
        />{" "}
        Cart
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[400px] max-w-[calc(100vw-1rem)] max-h-[474px] overflow-auto bg-gray-200 rounded-md shadow-lg py-1 z-10">
          {/* <div className="flex flex-col items-center p-3">
            <img
              className="w-16"
              src={emptyCart}
              alt="empty cart"
            />
            <p className="mt-4 text-md text-gray-700">Cart is empty</p>
          </div> */}
          <CartItem
            item={{ ...PRODUCTS[0], quantity: 1 }}
            onIncrement={() => {}}
            onDecrement={() => {}}
            onRemove={() => {}}
          />
          <div className="flex items-center justify-between gap-2 px-3 py-4 bg-gray-200 border-t border-gray-300 sticky bottom-0">
            <p className="font-semibold">Total: {formatPrice(31231)} ₴</p>
            <button className="btn px-2 py-1 border border-gray-900 rounded-md text-nowrap cursor-pointer hover:bg-gray-900/10 transition-colors duration-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
