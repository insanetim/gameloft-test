import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { PRODUCTS } from "../constants"
import Card from "./Card"

const Carousel = () => {
  return (
    <Swiper
      className="carousel"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={8}
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {PRODUCTS.map(product => (
        <SwiperSlide key={product.id}>
          <Card product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
