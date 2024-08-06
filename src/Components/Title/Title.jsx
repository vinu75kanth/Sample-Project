import React from 'react';
import './Title.css';

function Title(props) {
    const{
        p,h
    }=props;
     return (
        <div className='Title container'>
            <h1>{p}</h1>
            <p>{h}</p>
        </div>
    )
}

export default Title