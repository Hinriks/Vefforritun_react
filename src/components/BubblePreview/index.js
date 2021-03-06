import React from 'react';
import styles from './style.css';

const BubblePreview = ({ item }) => {
    return (
        <div className="card mb-4 box-shadow" style={styles}>
            <a href={"/bubbles/" + item.id} className='image'>
                <img className="card-img-top" src={item.image} alt={item.name}/>
            </a>
            <div className="card-body">
                <a href={"/bubbles/" + item.id}>
                    <h5 className="card-title">{item.name}</h5>
                </a>
                <p className="card-text">{item.description}</p>
                {/*<a href={"/bubbles/" + item.id } className="btn btn-primary float-right">Buy now!</a>*/}
            </div>
            <a href="/" className="btn btn-primary">Buy now!</a>
        </div>
    )
};

export default BubblePreview;
