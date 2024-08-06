import React from 'react';
import './Programs.css';
import program_1 from './../../assets/program-1.png';
import program_2 from './../../assets/program-2.png';
import program_3 from './../../assets/program-3.png';
import program_1_icon from './../../assets/program-icon-1.png';
import program_2_icon from './../../assets/program-icon-2.png';
import program_3_icon from './../../assets/program-icon-3.png';
function Programs() {
  return (
    <div className='Programs container'>
        <div className='Program'>
            <img id="hel" src={program_1} alt=""></img>
            <div className="content">
                <img src={program_1_icon} alt=""></img>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
        <div className='Program'>
            <img src={program_2} alt=""></img>
            <div className="content">
                <img src={program_2_icon} alt=""></img>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
        <div className='Program'>
            <img src={program_3} alt=""></img>
            <div className="content">
                <img src={program_3_icon} alt=""></img>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    </div>
  )
}

export default Programs