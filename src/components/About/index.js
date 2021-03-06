import React from 'react';
import styles from './style.css';
import bubblifyPicture from '../../resources/bubblify.jpg';

const About = () => {
    return (
        <div className='container'>
            <h1>About Us</h1>
            <div className='aboutUs'>
                <p className='aboutUsText' style={styles}>
                    Bubblify is a new emerging company that specifies in the manufacturing of bubbles.
                    <br />
                    We offer a wide range of bubbles, from Plain bubbles all the way to the crazy and unique Dark Matter bubbles!
                    <br />
                    <br />
                    We are very proud of the quality of our bubbles, as the water comes from the cleanest glaciers in Iceland, and the
                    soap used to make the bubbles is completely organic!
                </p>

                <img src={bubblifyPicture} alt='Bubblify bubblifyPicture' style={styles} />

            </div>
            <div className='contactInfo'>
                <p className='contactInfoText' style={styles}><strong>Address: </strong>Bubble Street 999</p>
                <p className='contactInfoText' style={styles}><strong>Telephone: </strong>+354 421-0000</p>
                <p className='contactInfoText' style={styles}><strong>Email: </strong><a href='mailto:bubblify@bubblify.com' style={styles}>bubblify@bubblify.com</a></p>
            </div>

        </div>
    )
};

export default About;
