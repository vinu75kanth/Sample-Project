import React, { useEffect, useState } from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

function Navbar() {
  const[sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setSticky(window.scrollY>50);
    });
  },[])
  function navOC(){
    const ul = document.querySelector('ul');
    ul.style.right = (ul.style.right=== '0px')? '-140px':'0px';
  }
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <h1><span style={{color:"tomato"}}>L</span>ogo</h1>
      <ul>
        <li><Link to='hero' smooth={true} duratiom={500} offset={0} >Home</Link></li>
        <li><Link to='Programs' smooth={true} duratiom={500} offset={-230}>Program</Link></li>
        <li><Link to='about' smooth={true} duratiom={500} offset={-150}>About us</Link></li>
        <li><Link to='campus' smooth={true} duratiom={500} offset={-300}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} duratiom={500} offset={-270}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} duratiom={500} offset={0}className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={navOC}></img>
    </nav>
  )
}

export default Navbar
