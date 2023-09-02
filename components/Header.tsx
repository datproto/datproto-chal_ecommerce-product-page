'use client'

import React, {MouseEventHandler, useState} from 'react'
import {navLinks} from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import BackgroundOverlay from '@/components/BackgroundOverlay'

interface INavbar {
  isOpen: boolean
  triggerMenuClose: MouseEventHandler<HTMLButtonElement>
}

const Navbar = ({isOpen, triggerMenuClose}: INavbar) => {
  /**
   * :meaning: This function is Mobile menu.
   * :params: isOpen:
   */

  return (
    <nav className={`absolute lg:relative h-full w-2/3 transform bg-white p-6 flex flex-col lg:flex-row gap-10 z-50 top-0 ${isOpen ? 'left-0' : 'left-[-70%]'} lg:left-0 transition-all`}>
      <button type='button' onClick={triggerMenuClose}>
        <Image src='/icons/icon-close.svg' alt='Close Button' width={14} height={15} />
      </button>
      <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
        {navLinks.map(link => (
          <li key={link.key}>
            <Link href={link.href} className="text-theme-black lg:text-theme-gray-normal font-bold lg:font-normal text-[1.125rem] lg:text-[0.9375rem]">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const triggerMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className='bg-white p-6 flex items-center justify-between border-b border-b-theme-smoke-normal'>
      {isMobileMenuOpen && <BackgroundOverlay />}

      <div id="left-menu" className='flex gap-4 lg:gap-0 items-center'>
        <button type='button' onClick={triggerMobileMenu} className='lg:hidden'>
          <Image src='/icons/icon-menu.svg' alt='Menu Icon' width={16} height={15} />
        </button>
        <Image src='/images/logo.svg' alt='Logo' width={132} height={20} />
        <Navbar isOpen={isMobileMenuOpen} triggerMenuClose={triggerMobileMenu} />
      </div>
      <div id="right-menu" className='flex gap-4 lg:gap-8 items-center'>
        <Image src='/icons/icon-cart.svg' alt='icon-cart' width={22} height={20} />
        <Image src='/images/image-avatar.png' alt='avatar' width={100} height={100} className='object-cover h-6 w-6 lg:h-[3.125rem] lg:w-[3.125rem]' />
      </div>
    </header>
  )
}

export default Header