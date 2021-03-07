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
    }, []);

    return (
        <div className='container'>
            <h1 className='title'>Bundles</h1>
            <div className="bundleContainer">
                {Object.values(bundles).map(item =>
                    <div className="col-md-4" key={item.id}>
                        <h2 className='bundleName' style={styles}>{item.name}</h2>
                        <BundleList key={item.id} item={item} />
                    </div>
                )}
            </div>
        </div>
    )
};

export default Bundles;
