import React from 'react'
import {navLinks} from '@/constants'
import Link from 'next/link'

const Navbar = () => (
  <nav>
    <ul>
      {navLinks.map(link => (
        <li key={link.key}>
          <Link href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
const Header = () => {
  return (
    <div>

    </div>
  )
}

export default Header