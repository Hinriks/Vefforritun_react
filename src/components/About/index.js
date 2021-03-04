import React, { useEffect } from 'react';
import styles from './style.css';
import logo from '../../resources/bubblify.jpg';

const About = () => {
    return (
        <div className='aboutUsContainer' style={styles}>
            <h1>About Us</h1>
            <div className='aboutUs'>
                <p className='aboutUsText' style={styles}>
                    Bubblify is a new emerging company that specifies in the manufacturing of bubbles!
                    We offer a wide range of bubbles, from Plain bubbles to the unique Dark Matter bubbles.
                </p>

                <img src={logo} alt='Bubblify logo' style={styles}/>

                <img src={logo} alt='Bubblify logo' style={styles} />
            </div>
            <div className='contactInfo'>
                <p className='contactInfoText' style={styles}>Address: </p>
                <p className='contactInfoText' style={styles}>Telephone: </p>
                <p className='contactInfoText' style={styles}>Email: </p>
            </div>

        </div>
    )
};

export default About;
