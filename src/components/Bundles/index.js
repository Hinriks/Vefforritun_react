import React, { useEffect, useState } from 'react';
import { getBundles } from '../../services/bubbleService';
import BundleList from '../BundlesList';
import styles from './styles.css'

const Bundles = () => {
    const [bundles, setBundles] = useState({});
    useEffect(() => {
        (async () => {
            setBundles(await getBundles());
        })();
    }, [bundles]);

    return (
        <div className='productsContainer' style={styles}>
            <h1>Bundles</h1>
            {Object.values(bundles).map(item =>
                <a href={`bundles/${item.id}`} style={{ margin: '40px' }}>
                    <div key={item.id}>
                        <h2 className='bundleName' style={styles}>{item.name}</h2>
                        <BundleList key={item.id} item={item} />
                    </div>
                </a>
            )
            }
        </div >
    )
};

export default Bundles;
