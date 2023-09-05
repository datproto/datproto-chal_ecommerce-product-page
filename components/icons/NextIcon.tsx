import React from 'react'

interface INextIcon {
  width?: string
  height?: string
  className?: string
}

function NextIcon({className}: INextIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 18"
      className={className}
    >
      <path
        d="m2 1 8 8-8 8"
      ></path>

    </svg>
  )
}

export default NextIcon