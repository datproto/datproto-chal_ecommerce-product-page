'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import PrevIcon from '@/components/icons/PrevIcon'
import NextIcon from '@/components/icons/NextIcon'

interface ICarousel {
  needControl: boolean
  productPhotos: string[]
  customClass?: string
  customThumbnailsContainerClass?: string
  setOpenProductModal?: React.Dispatch<React.SetStateAction<any>>
}

const Carousel = ({
                    productPhotos,
                    customClass,
                    customThumbnailsContainerClass,
                    setOpenProductModal,
                    needControl = true
                  }: ICarousel) => {
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

  const openProductModal = () => {
    setOpenProductModal && setOpenProductModal(true)
  }

  if (productPhotos) {
    return (
      <div className={`carousel flex flex-col ${customClass}`}>
        <div
          className="carousel__items relative items-center">
          {needControl && (
            <div id="carousel-buttons"
                 className="absolute z-30 flex h-full w-full items-center justify-between px-4 lg:px-0">
              <Button buttonHandler={prevImageHandler}
                      customClass="group bg-white p-4 lg:p-8 relative rounded-full shadow-md lg:-ml-11">
                <PrevIcon
                  className="h-[15px] w-[13px] fill-none stroke-black stroke-[3] transition-all group-hover:stroke-theme-orange lg:h-[25px] lg:w-[22px]"/>
              </Button>
              <Button buttonHandler={nextImageHandler}
                      customClass="group bg-white p-4 lg:p-8 relative rounded-full shadow-md lg:-mr-11">
                <NextIcon
                  className="h-[15px] w-[13px] fill-none stroke-black stroke-[3] transition-all group-hover:stroke-theme-orange lg:h-[24px] lg:w-[22px]"/>
              </Button>
            </div>
          )}
          <div className="h-[300px] w-full cursor-pointer overflow-x-hidden lg:h-auto" onClick={openProductModal}>
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
        </div>

        <div
          className={`carousel__thumbnails flex justify-between overflow-x-hidden ${customThumbnailsContainerClass}`}>
          {productPhotos.map((item, k) => {
            return (
              <div key={k}
                   className={`thumbnail__item box-border hidden aspect-square flex-1 items-center justify-center rounded-xl border-2 transition-all ${carouselPosition == k ? 'border-theme-orange' : 'border-transparent'} bg-white lg:flex`}>
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