import { formatPrice } from "../lib/formatPrice"
import { addToCart } from "../store/features/cartSlice"
import { useAppDispatch } from "../store/hooks"
import type { Product } from "../types"

interface CardProps {
  product: Product
}

const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="card">
      <img
        className="card-image"
        src={product.image}
        alt={product.title}
      />
      <div className="card-info">
        <div className="flex flex-col max-w-2/3">
          <h2 className="font-semibold text-xl mb-1">{product.title}</h2>
          <p className="text-sm">{product.description}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="font-bold">{formatPrice(product.price)} ₴</span>
          <button
            className="btn px-2 py-1 border border-white rounded-md text-nowrap cursor-pointer hover:bg-white/10 transition-colors duration-200"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
