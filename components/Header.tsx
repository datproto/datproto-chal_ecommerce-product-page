'use client'

import React, {MouseEventHandler, useState} from 'react'
import {navLinks} from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import BackgroundOverlay from '@/components/BackgroundOverlay'
import Button from '@/components/Button'

interface INavbar {
  isOpen: boolean
  triggerMenuClose: MouseEventHandler<HTMLButtonElement>
}

interface IHeader {
  cartItems: {
    productName: string,
    productPrice: number,
    productNum: number,
    productImage: string
  }
  setCart: React.Dispatch<React.SetStateAction<any>>
}

const Navbar = ({isOpen, triggerMenuClose}: INavbar) => {
  /**
   * :meaning: This function is Mobile menu.
   * :params: isOpen:
   */

  return (
    <nav
      className={`absolute top-0 z-[90] flex h-full w-2/3 transform flex-col gap-10 bg-transparent p-6 lg:relative lg:w-auto lg:flex-row ${isOpen ? 'left-0' : 'left-[-70%]'} transition-all lg:left-0`}>
      <button type="button" onClick={triggerMenuClose} className="lg:hidden">
        <Image src="/icons/icon-close.svg" alt="Close Button" width={14} height={15}/>
      </button>
      <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        {navLinks.map(link => (
          <li key={link.key} className="group relative">
            <Link href={link.href}
                  className="text-[1.125rem] font-bold text-theme-black lg:text-[0.9375rem] lg:font-normal lg:text-theme-gray-normal">
              {link.text}
            </Link>
            <div
              className="absolute -bottom-[3rem] hidden h-1 w-full bg-transparent transition-all group-hover:bg-theme-orange lg:block"/>
          </li>
        ))}
      </ul>
    </nav>
  )
}
const Header = ({cartItems, setCart}: IHeader) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const triggerMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const triggerCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  function removeCartItem() {
    setCart({
      productName: cartItems.productName,
      productPrice: cartItems.productPrice,
      productNum: 0,
      productImage: cartItems.productImage
    })
  }

  return (
    <header className="flex items-center justify-between border-b border-b-theme-smoke-normal bg-white p-6">
      {isMobileMenuOpen && <BackgroundOverlay/>}

      <div id="left-menu" className="flex items-center gap-4 lg:gap-0">
        <button type="button" onClick={triggerMobileMenu} className="lg:hidden">
          <Image src="/icons/icon-menu.svg" alt="Menu Icon" width={16} height={15}/>
        </button>
        <Image src="/images/logo.svg" alt="Logo" width={132} height={20}/>
        <Navbar isOpen={isMobileMenuOpen} triggerMenuClose={triggerMobileMenu}/>
      </div>

      <div id="right-menu" className="flex items-center gap-4 lg:gap-8">
        <div id="right-menu__cart" className="relative">
          <Button buttonHandler={triggerCart}>
            <Image src="/icons/icon-cart.svg" alt="icon-cart" width={22} height={20}/>
          </Button>
          {cartItems.productNum !== 0 && (
            <div
              className="right-menu__cart-badge absolute -right-4 -top-3 rounded-full bg-theme-orange px-2 py-0.5 text-xs font-bold text-white">
              {cartItems.productNum}
            </div>
          )}
        </div>
        <Image src="/images/image-avatar.png" alt="avatar" width={100} height={100}
               className="h-6 w-6 cursor-pointer rounded-full object-cover outline transition-all duration-500 ease-in-out lg:h-[3.125rem] lg:w-[3.125rem] lg:hover:outline-2 lg:hover:outline-theme-orange"/>
      </div>

      {isCartOpen && (
        <div id="shopping-cart"
             className="absolute left-0 top-[4.5rem] z-50 w-full p-2 lg:left-auto lg:right-28 lg:top-28 lg:w-[400px]">
          <div id="shopping-cart__content"
               className="divide-y divide-theme-smoke-normal rounded-lg bg-white shadow-2xl">
            <div id="shopping-cart__header" className="rounded-xl p-6 pb-7">
              <h1 className="font-bold text-theme-black">Cart</h1>
            </div>
            {cartItems.productNum !== 0 ? (
              <div id="shopping-cart__body" className="flex flex-col gap-5 p-6 pb-8 lg:gap-6">
                <div id="shopping-cart__body-item" className="flex items-center gap-4">
                  <Image src={cartItems.productImage} alt="Product Image" width={50} height={50}
                         className="rounded-lg"/>

                  <div id="shopping-cart__body-item__text" className="flex flex-1 flex-col text-theme-gray-normal">
                    <p className="">{cartItems.productName}</p>
                    <p>${cartItems.productPrice} x {cartItems.productNum} <span
                      className="font-bold text-theme-black">${cartItems.productPrice * cartItems.productNum}</span></p>
                  </div>

                  <Button buttonHandler={removeCartItem}>
                    <Image src="/icons/icon-delete.svg" alt="Icon Delete" width={14} height={16}/>
                  </Button>
                </div>

                <Button buttonHandler={() => {
                }} customClass="rounded-xl bg-theme-orange text-white font-bold text-center py-5 w-full">
                  Checkout
                </Button>
              </div>
            ) : (
              <p className="w-full py-20 text-center font-bold text-theme-gray-normal">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header