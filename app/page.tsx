'use client'

import Carousel from '@/components/Carousel'
import {useState} from 'react'
import {googleProducts} from '@/constants'

export default function Home() {
  const [product, setProduct] = useState(googleProducts[0])

  return (
    <main>
      <Carousel
        productPhotos={product.product_photos}
      />
    </main>
  )
}
