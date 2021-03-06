import React from 'react';
import styles from './style.css';

const Pickup = () => {
    return (
        <div className='container pickupContainer' style={styles}>
            <h1>Store Pick-up</h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Full Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputTelephone">Telephone</label>
                        <input className="form-control" type="tel" id="inputTelephone" placeholder="1-(555)-555-5555" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Review Order</button>
            </form>
        </div>
    )
};

export default Pickup;
