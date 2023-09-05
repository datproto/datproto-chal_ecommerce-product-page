import React from 'react'

interface ICloseIcon {
  width?: string
  height?: string
  className?: string
}

function CloseIcon({className}: ICloseIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 14 15"
    >
      <path
        strokeWidth="1"
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
      ></path>

    </svg>
  )
}

export default CloseIcon