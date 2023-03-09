import React from 'react'

import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai'

const footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 MKD Headphones All rights reserved</p>

      <p className="icons">
        <AiFillInstagram /> <AiOutlineTwitter /> <AiOutlineFacebook />
      </p>
    </div>
  )
}

export default footer