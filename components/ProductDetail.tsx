import React, {useState} from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import Badge from '@/components/Badge'
import {convertCurrencyStringToNumber} from '@/utils'
import ProductModal from '@/components/ProductModal'
import CartIcon from '@/components/icons/CartIcon'

interface IProductDetail {
  store: string
  product_title: string
  product_description: string
  product_images: string[]
  price: {
    original?: string | null
    current: string
  }
  setCart: React.Dispatch<React.SetStateAction<any>>
  cartItemsNumber: number

  isOpenModal?: boolean
  setOpenProductModal?: React.Dispatch<React.SetStateAction<any>>
}

const ProductDetail = ({
                         store,
                         product_title,
                         product_description,
                         product_images,
                         price,
                         setCart,
                         cartItemsNumber,
                         isOpenModal,
                         setOpenProductModal
                       }: IProductDetail) => {
  const [productCounter, setProductCounter] = useState(0)

  function addProductNum() {
    setProductCounter(productCounter + 1)
  }

  function removeProductNum() {
    if (productCounter !== 0) {
      setProductCounter(productCounter - 1)
    } else {
      setProductCounter(0)
    }
  }

  function addProductToCart() {
    setCart(
      {
        productName: product_title,
        productPrice: price.current,
        productNum: cartItemsNumber += productCounter,
        productImage: product_images[0]
      }
    )
  }

  // Calculate discount percentage, in case there is a different between price_original and price_current
  let discountPercentage: string | null
  if (price.original) {
    discountPercentage = (100 - (convertCurrencyStringToNumber(price.current) / convertCurrencyStringToNumber(price.original)) * 100).toFixed(2) + '%'
  } else {
    discountPercentage = null
  }

  return (
    <div id="product-detail" className="flex-1 xl:w-3/5">
      <div id="product-detail__information" className="flex flex-col gap-4 p-6">
        <h2
          className="text-sm font-bold uppercase tracking-[0.125rem] text-theme-orange"
        >
          {store}
        </h2>
        <h1
          className="text-[1.5rem] font-bold leading-8 text-theme-black lg:text-[3rem] lg:leading-[3rem] xl:mb-4 2xl:text-[4.5rem] 2xl:leading-[1em]">
          {product_title}
        </h1>
        {/* eslint-disable-next-line */}
        <p
          className="text-[0.9375rem] leading-6 text-theme-gray-normal lg:text-[1rem] 2xl:text-[1.5rem] 2xl:leading-9">
          {product_description}
        </p>
        <div id="product__price" className="flex w-full items-center lg:mb-4 lg:flex-col lg:items-start lg:gap-2">
          <div id="price__new" className="flex items-center gap-4">
            <div className="price__current">
              <p className="text-3xl font-bold text-theme-black">
                {price.current}
              </p>
            </div>
            <div className="price__discount">
              {discountPercentage && (
                <Badge>
                  {discountPercentage}
                </Badge>
              )}
            </div>
          </div>
          <div className="price__price-original flex-1">
            <p className="text-right font-bold text-theme-gray-lighter line-through">{price.original}</p>
          </div>
        </div>

        <div id="product__form" className="flex flex-col gap-4 lg:flex-row">
          <div className="flex items-center justify-between rounded-xl bg-theme-smoke-lighter px-6 py-5 lg:w-1/3">
            <Button buttonHandler={removeProductNum}>
              <Image src="/icons/icon-minus.svg" alt="Icon Minus" width={12} height={4}/>
            </Button>
            <div id="product__counter" className="font-bold text-theme-black">
              {productCounter}
            </div>
            <Button buttonHandler={addProductNum}>
              <Image src="/icons/icon-plus.svg" alt="Icon Minus" width={12} height={12}/>
            </Button>
          </div>

          <Button type="button"
                  customClass="flex items-center lg:flex-1 font-bold bg-theme-orange w-full text-white rounded-xl
                               justify-center gap-4 py-4 shadow-theme-orange"
                  buttonHandler={addProductToCart}>
            <CartIcon className="width-[20px] h-[20px] fill-white"/>
            Add to cart
          </Button>
        </div>
      </div>

      <ProductModal productPhotos={product_images} isOpenProductModal={isOpenModal}
                    setOpenProductModal={setOpenProductModal}/>
    </div>
  )
}

export default ProductDetail