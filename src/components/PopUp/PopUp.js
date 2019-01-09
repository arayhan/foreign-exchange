import React from 'react';
import './PopUp.css';

const PopUp = (props) => {
    return (
        <div className={`popup ${ props.show ? 'show' : '' }`}>
            <div className="popup-background" onClick={ props.handleClick }></div>
            <div className="popup-inner">
                <h3>Select Currency</h3>
                <form onSubmit={ props.handleSubmit } name="selectCurrencyForm">
                    <select name="currency" onChange={ props.handleChange }>
                        { Object.keys(props.rates).map(rate => (
                            (!props.currencyItems.includes(rate)) 
                            && 
                            <option key={ rate } value={ rate }>{ rate }</option>
                        )) }
                    </select>
                    <button type="submit">Add Currency</button>
                </form>
            </div>
        </div>
    )
}

export default PopUp;