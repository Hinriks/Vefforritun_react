import React, { useEffect, useState } from 'react';
import {getBundles} from '../../../services/bubbleService/';
import styles from '../style.css';
import BundlesListHomePage from "./BundlesListHomePage";

const BundlesHomePage = () => {
    const [bundles, setBundles] = useState({});
    useEffect(() => {
        let isMounted = true;
        (async () => {
            if (isMounted) {
                setBundles(await getBundles());
            }
        })();
        return () => { isMounted = false };
    }, [bundles]);

    return (
        <div className='bundlesHomePageContainer' style={styles}>
            <h2>Bundles</h2>
            {Object.values(bundles).map(item =>
                <a href={"/bundles/" + item.id} key={item.id} className="text-decoration-none" style={{margin: '40px'}}>
                <div key={item.id}>
                    <h3 className='bundleName' style={styles}>{item.name}</h3>
                    <BundlesListHomePage key={item.id} item={item} />
                </div>
                </a>
            )}
            <h4 className="py-2">Click <a href='/bundles'>here</a> to see all bundles.</h4>
        </div>
    )
};

export default BundlesHomePage;
