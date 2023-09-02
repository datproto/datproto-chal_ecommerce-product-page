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
    <nav
      className={`absolute top-0 z-50 flex h-full w-2/3 transform flex-col gap-10 bg-white p-6 lg:relative lg:flex-row ${isOpen ? 'left-0' : 'left-[-70%]'} transition-all lg:left-0`}>
      <button type="button" onClick={triggerMenuClose}>
        <Image src="/icons/icon-close.svg" alt="Close Button" width={14} height={15}/>
      </button>
      <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        {navLinks.map(link => (
          <li key={link.key}>
            <Link href={link.href}
                  className="text-[1.125rem] font-bold text-theme-black lg:text-[0.9375rem] lg:font-normal lg:text-theme-gray-normal">
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
        <Image src="/icons/icon-cart.svg" alt="icon-cart" width={22} height={20}/>
        <Image src="/images/image-avatar.png" alt="avatar" width={100} height={100}
               className="h-6 w-6 object-cover lg:h-[3.125rem] lg:w-[3.125rem]"/>
      </div>
    </header>
  )
}

export default Header