import React, { useEffect, useState } from 'react';
import {getBundles} from '../../../services/bubbleService/';
import styles from '../style.css';
import BundlesListHomePage from "./BundlesListHomePage";

const BundlesHomePage = () => {
    const [bundles, setBundles] = useState({});
    useEffect(() => {
        (async () => {
            setBundles(await getBundles());
        })();
    }, [bundles]);

    return (
        <div className='productsContainer' style={styles}>
            <h3>Bundles</h3>
            {Object.values(bundles).map(item =>
                <a href='#' style={{margin: '40px'}}>
                <div key={item.id}>
                    <h2 className='bundleName' style={styles}>{item.name}</h2>
                    <BundlesListHomePage key={item.id} item={item} />
                </div>
                </a>
            )}
        </div>
    )
};

export default BundlesHomePage;
