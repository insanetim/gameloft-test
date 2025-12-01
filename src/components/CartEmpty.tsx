import emptyCart from "../assets/empty-cart.png"

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center p-3">
      <img
        className="w-16"
        src={emptyCart}
        alt="empty cart"
      />
      <p className="mt-4 text-md text-gray-700">Cart is empty</p>
    </div>
  )
}

export default CartEmpty
