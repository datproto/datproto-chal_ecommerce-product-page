'use client'

import Carousel from '@/components/Carousel'
import React, {useState} from 'react'
import {googleProducts} from '@/constants'
import ProductDetail from '@/components/ProductDetail'
import Header from '@/components/Header'

export default function Home() {
  const [product, setProduct] = useState(googleProducts[0])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [cartItems, setCartItems] = useState(
    {
      productName: '',
      productPrice: '',
      productNum: 0,
      productImage: ''
    })

  console.log(cartItems)

  return (
    <>
      <Header
        cartItems={cartItems}
        setCart={setCartItems}
      />
      <main
        className="flex w-full flex-col lg:flex-row lg:items-center lg:gap-12 lg:px-0 lg:py-16 xl:gap-32 xl:px-10 2xl:px-20 2xl:py-32">
        <Carousel
          productPhotos={product.product_photos.slice(0, 4)}
        />

        <ProductDetail
          store={product.offer.store_name}
          product_title={product.product_title}
          product_description={product.product_description}
          product_image={product.product_photos[0]}
          price={{
            current: product.offer.price,
            original: product.offer.original_price
          }}
          setCart={setCartItems}
          cartItemsNumber={cartItems.productNum}
        />
      </main>
    </>
  )
}
