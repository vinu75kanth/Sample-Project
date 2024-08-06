import React, { useRef, useState } from 'react'
import './Testimonials.css'
import prev_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonials() {
    const ulRef=useRef(null);
    let tx=0;
    function handleNext(){
        if(tx> -50){
            tx-=25;
        }
        ulRef.current.style.transform=`translateX(${tx}%)`;
    }
    function handlePrev(){
        if(tx< 0){
            tx+=25;
        }
        ulRef.current.style.transform=`translateX(${tx}%)`;
    }
  return (
    <div className='testimonial'>
        <img src={prev_icon} alt="" className='prev_icon' onClick={handlePrev}></img>
        <img src={next_icon} alt="" className='next_icon' onClick={handleNext}></img>
        <div className='slider'>
            <ul ref={ulRef}>
                <li>
                <div className='slide'>
                    <div className='user'>
                        <img src={user_1} alt=""></img>
                        <div>
                            <h3>User_1</h3>
                            <span>Location_1</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam ullam consequuntur animi doloremque facilis.</p>
                </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user'>
                        <img src={user_2} alt=""></img>
                        <div>
                            <h3>User_2</h3>
                            <span>Location_2</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam ullam consequuntur animi doloremque facilis.</p>
                </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user'>
                        <img src={user_3} alt=""></img>
                        <div>
                            <h3>User_3</h3>
                            <span>Location_3</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam ullam consequuntur animi doloremque facilis.</p>
                </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user'>
                        <img src={user_4} alt=""></img>
                        <div>
                            <h3>User_4</h3>
                            <span>Location_4</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam ullam consequuntur animi doloremque facilis.</p>
                </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials