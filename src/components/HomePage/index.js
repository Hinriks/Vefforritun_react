import React from 'react';
import styles from './style.css';
import BubblesHomePage from "./BubblesHomePage";
import BundlesHomePage from "./BundlesHomePage";
import hinrik from '../../resources/hinrik.jpg';
import kumasi from '../../resources/kumasi.jpg';
import patrekur from '../../resources/patrekur.jpg';

const HomePage = () => {

    return (
        <div className='container'>
            <h1>Welcome to Bubblify!</h1>
            <h5>Where we got the perfect bubbles for you!</h5>

            <hr/>

            <div style={styles}>
                <BubblesHomePage/>
                <hr/>
                <BundlesHomePage/>
            </div>

            <hr/>

            <h3 className='authorsText' style={styles}>Authors of the Bubblify website:</h3>
            <div className='authors'>
                <div>
                    <a href='https://www.instagram.com/hinni97/' target='_blank' rel='noreferrer'>
                        <h5 className='name'>Hinrik Snær</h5>
                        <img src={hinrik} alt='Hinrik Snær' style={styles} />
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/kumasimani/' target='_blank'  rel='noreferrer'>
                        <h5 className='name'>Kumasi Máni</h5>
                        <img src={kumasi} alt='Kumasi Máni' style={styles} />
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/patrekurorn/' target='_blank'  rel='noreferrer'>
                        <h5 className='name'>Patrekur Örn</h5>
                        <img src={patrekur} alt='Patrekur Örn' style={styles} />
                    </a>
                </div>
            </div>

        </div>
    )
};

export default HomePage;
