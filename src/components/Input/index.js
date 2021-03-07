import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onInput, type, errorMessage, label, name, htmlId }) => (
    <div className="form-group">
        {
            label
                ?
                <label htmlFor={htmlId} className="control-label"> {label} </label>
                :
                <></> // annars ekki rendera neitt  
        }
        <input
            type={type}
            value={value}
            onChange={onInput}
            name={name}
            id={htmlId}
            className="form-control" />
        <span className="error"> {errorMessage} </span>
    </div>
);

// validate 
Input.PropTypes = {
    /* The value provided to the html tag */
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'submit', 'email', 'number']).isRequired,
    errorMessage: PropTypes.string, // ekki requeried 
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    htmlId: PropTypes.string.isRequired,
}

export default Input;