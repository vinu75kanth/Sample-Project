import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <p>
            ©️{new Date().getFullYear()} All Rights Reserved
        </p>
        <ul>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer