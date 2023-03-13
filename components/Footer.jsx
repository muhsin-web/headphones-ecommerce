import React from 'react'

import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai'

const footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Muhsin All rights reserved</p>

      <p className="icons">
        <AiFillInstagram /> <AiOutlineTwitter /> <AiOutlineFacebook /> @arascos
      </p>
    </div>
  )
}

export default footer