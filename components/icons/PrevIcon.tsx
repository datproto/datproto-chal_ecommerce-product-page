import React from 'react'

interface IPrevIcon {
  width?: string
  height?: string
  className?: string
}

function PrevIcon({className}: IPrevIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 18"
      className={className}
    >
      <path
        d="M11 1 3 9l8 8"
      ></path>

    </svg>
  )
}

export default PrevIcon