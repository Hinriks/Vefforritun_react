import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
            <a href='/bundles'><h4 className="py-2">Click here to see all bundles.</h4></a>
        </div>
    )
};

BundlesHomePage.propTypes = {
    bundles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};

export default BundlesHomePage;
