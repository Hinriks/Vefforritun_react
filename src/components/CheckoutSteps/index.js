import React from 'react';
import styles from './style.css';

const CheckoutSteps = (props) => {
    let currentStep = props.step
    if (currentStep === 0) {
        return (
            <div className='row steps-wrap pt-2 mb-4' style={styles}>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Delivery</div>
                <div className="steps-cell border col-md-3 text-center py-2">Information</div>
                <div className="steps-cell border col-md-3 text-center py-2">Review</div>
                <div className="steps-cell border col-md-3 text-center py-2">Finished</div>
            </div>
        )
    } else if (currentStep === 1) {
        return (
            <div className='row steps-wrap pt-2 mb-4' style={styles}>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Delivery</div>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Information</div>
                <div className="steps-cell border col-md-3 text-center py-2">Review</div>
                <div className="steps-cell border col-md-3 text-center py-2">Finished</div>
            </div>
        )
    } else if (currentStep === 2) {
        return (
            <div className='row steps-wrap pt-2 mb-4' style={styles}>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Delivery</div>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Information</div>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Review</div>
                <div className="steps-cell border col-md-3 text-center py-2">Finished</div>
            </div>
        )
    } else if (currentStep === 3) {
        return (
            <div className='row steps-wrap pt-2 mb-4' style={styles}>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Delivery</div>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Information</div>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Review</div>
                <div className="steps-cell border col-md-3 text-center py-2 cell-done">Finished</div>
            </div>
        )
    } 
};

export default CheckoutSteps;
