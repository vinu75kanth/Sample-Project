import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About({setPlay}) {
  return (
    <div className='about container'>
        <div className='about-left'>
            <img src={about_img} alt=""></img>
            <img id="play" src={play_icon} alt="" 
              onClick={()=>{setPlay(true)}}></img>
        </div>
        <div className='about-right'>
            <h2>Lorem, ipsum.</h2>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem commodi unde quidem nulla nisi. Earum magni cumque aut quo odio sunt nihil facere, velit quia. Eos asperiores inventore autem quis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error praesentium eos labore cumque repellat maiores obcaecati nobis eveniet autem rem animi qui, excepturi voluptatum, esse optio voluptate quo dolore. Eum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus delectus reprehenderit, nisi distinctio magnam, maxime qui dolore cum temporibus illo sequi odio. Ducimus repellat alias id praesentium, sint libero.</p>
        </div>
    </div>
  )
}

export default About