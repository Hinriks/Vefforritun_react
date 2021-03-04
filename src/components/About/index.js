import React, { useEffect } from 'react';
import styles from './style.css';
import logo from '../../resources/bubblify.jpg';

const About = () => {
    return (
        <div className='aboutUsContainer' style={styles}>
            <h1>About Us</h1>
            <div className='aboutUs'>
                <h5 className='aboutUsText' style={styles}>
                    Bubblify is a new emerging company that specifies in the manufacturing of bubbles!
                </h5>
                <img src={logo} alt='Bubblify logo' style={styles}/>
            </div>
        </div>
    )
};

export default About;
