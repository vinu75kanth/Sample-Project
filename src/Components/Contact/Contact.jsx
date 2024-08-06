import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';


function Contact() {
  return (
    <div className='contact container'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon}/></h3>
            <p>Feel free to reach out through contact form or find our contact
                information below.
            </p>
            <ul>
                <li><img src={mail_icon}/>fake@gmail.com</li>
                <li><img src={phone_icon}/>1234567890</li>
                <li><img src={location_icon}/>1/2, Fake Street, Fake avenue<br/>
                Fake State, Fake Country<br/>
                000000</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form>
                <label>Your Name *</label>
                <input type="text" placeholder='Name' required/>
                <label>Phone Number *</label>
                <input type="tel" placeholder='Phone Number' required/>
                <label>Write your message here</label>
                <textarea placeholder='Message' rows="6"/>
                <button className='btn dark-btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact