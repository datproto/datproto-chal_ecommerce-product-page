'use client'

import Carousel from '@/components/Carousel'
import React, {useState} from 'react'
import {googleProducts} from '@/constants'
import ProductDetail from '@/components/ProductDetail'
import Header from '@/components/Header'
import {useWindowSize} from '@uidotdev/usehooks'

export default function Home() {
  const [product, setProduct] = useState(googleProducts[0])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [cartItems, setCartItems] = useState(
    {
      productName: '',
      productPrice: 0,
      productNum: 0,
      productImage: ''
    })

  const screenWidth = useWindowSize()

  return (
    <>
      <Header
        cartItems={cartItems}
        setCart={setCartItems}
      />
      <main
        className="flex w-full flex-col lg:flex-row lg:items-center lg:gap-12 lg:px-0 lg:py-16 xl:gap-16 xl:px-10 2xl:px-20 2xl:py-16">
        <Carousel
          productPhotos={product.product_photos.slice(0, 4)}
          needControl={!(screenWidth.width && screenWidth.width >= 1280)}
          customClass="xl:w-2/5 xl:gap-8"
          customThumbnailsContainerClass="gap-6"
          setOpenProductModal={setIsOpenModal}
        />

        <ProductDetail
          store={product.offer.store_name}
          product_title={product.product_title}
          product_description={product.product_description}
          product_images={product.product_photos}

          price={{
            current: product.offer.price,
            original: product.offer.original_price
          }}
          setCart={setCartItems}
          cartItemsNumber={cartItems.productNum}

          isOpenModal={isOpenModal}
          setOpenProductModal={setIsOpenModal}
        />
      </main>
    </>
  )
}
