import React from 'react'

const Button = ({styles}) =>  (
    <button
    type='button'
    className={`bg-blue-gradient py-4 px-4 rounded-md font-poppins text-[18px] outline-none font-medium text-primary ${styles}`}>
      Get Started
    </button>
  )


export default Button