'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

interface ICarousel {
  productPhotos: string[]
}

const Carousel = ({productPhotos}: ICarousel) => {
  const numImages = productPhotos ? productPhotos.length : 0

  const [carouselPosition, setCarouselPosition] = useState(0)

  // Carousel button handlers
  const nextImageHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (carouselPosition < numImages - 1) {
      setCarouselPosition(carouselPosition + 1)
    } else {
      setCarouselPosition(0)
    }
  }
  const prevImageHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (carouselPosition <= numImages && carouselPosition !== 0) {
      setCarouselPosition(carouselPosition - 1)
    } else {
      setCarouselPosition(numImages - 1)
    }
  }

  if (productPhotos) {
    return (
      <div className="relative flex h-[300px] items-center overflow-hidden lg:hidden">
        <div id="carousel-buttons" className="absolute z-50 flex w-full items-center justify-between px-4">
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
        <div id="carousel-items"
             className="absolute z-0 flex h-full w-full items-center transition-all duration-500 ease-in-out"
             style={{transform: `translateX(-${carouselPosition * 100}%)`}}>
          {productPhotos.map((item, k) => {
            return (
              <Image key={k} src={item} alt="Product Image"
                     width={1000} height={1000}/>
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