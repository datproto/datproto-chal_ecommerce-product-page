import React from 'react'

interface IBadge {
  children: React.ReactNode
}

const Badge = ({children}: IBadge) => {
  return (
    <div className="grow-0 rounded-md bg-theme-beige px-2 py-1 font-bold text-theme-orange">
      {children}
    </div>
  )
}

export default Badge