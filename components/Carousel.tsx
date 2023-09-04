'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

interface ICarousel {
  needControl?: boolean
  productPhotos: string[]
}

const Carousel = ({productPhotos, needControl = true}: ICarousel) => {
  const numImages = productPhotos ? productPhotos.length : 0

  const [carouselPosition, setCarouselPosition] = useState(0)

  // Carousel button handlers
  const nextImageHandler = () => {
    if (carouselPosition < numImages - 1) {
      setCarouselPosition(carouselPosition + 1)
    } else {
      setCarouselPosition(0)
    }
  }
  const prevImageHandler = () => {
    if (carouselPosition <= numImages && carouselPosition !== 0) {
      setCarouselPosition(carouselPosition - 1)
    } else {
      setCarouselPosition(numImages - 1)
    }
  }

  if (productPhotos) {
    return (
      <div className="carousel flex flex-col lg:flex-1 xl:gap-8">
        <div
          className="carousel__items relative h-[300px] items-center overflow-x-hidden lg:h-auto">
          {needControl && (
            <div id="carousel-buttons"
                 className="absolute z-30 flex h-full w-full items-center justify-between px-4">
              <Button buttonHandler={prevImageHandler} customClass="bg-white p-6 relative rounded-full shadow-md">
                <Image src="/icons/icon-previous.svg"
                       className="l-0 r-0 t-0 absolute m-auto h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 object-none"
                       alt="Icon Prev" width={12}
                       height={18}/>
              </Button>
              <Button buttonHandler={nextImageHandler} customClass="bg-white p-6 relative rounded-full shadow-md">
                <Image src="/icons/icon-next.svg"
                       className="l-0 r-0 t-0 absolute m-auto h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 object-none"
                       alt="Icon Next"
                       width={13}
                       height={18}/>
              </Button>
            </div>
          )}
          <div
            className="z-0 flex h-full w-full items-center transition-all duration-500 ease-in-out"
            style={{transform: `translateX(-${carouselPosition * 100}%)`}}
          >
            {productPhotos.map((item, k) => {
              return (
                <Image key={k} src={item} alt="Product Image"
                       width={1000} height={1000}
                       className="lg:rounded-3xl"
                />
              )
            })}
          </div>
        </div>

        <div
          className="carousel__thumbnails flex justify-between space-x-6 overflow-x-auto">
          {productPhotos.map((item, k) => {
            return (
              <div key={k}
                   className={`thumbnail__item hidden aspect-square flex-1 items-center justify-center rounded-xl border-2 transition-all ${carouselPosition == k ? 'border-theme-orange' : 'border-transparent'} bg-white lg:flex`}>
                <Image src={item} alt="Product Image"
                       width={500}
                       height={500}
                       onClick={() => setCarouselPosition(k)}
                       className={`h-full w-full cursor-pointer rounded-xl bg-theme-orange object-fill transition-all hover:opacity-50 ${carouselPosition == k && 'opacity-25'} lg:block`}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}

export default Carousel