import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx';
import './index.css';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';

function App() {
  const [play,setPlay]=useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title p="Our Program" h="What We Offer"/>
      <Programs/>
      <About setPlay={setPlay}/>
      <Title p="Gallery" h="What We Offer"/>
      <Campus/>
      <Title p="Testimonials" h="What Our Student Says"/>
      <Testimonials/>
      <Title p="Contact Us" h="Get in Touch"/>
      <Contact/>
      <Footer/>
      <VideoPlayer play={play} setPlay={setPlay}/>
    </div>
  )
}
export default  App;