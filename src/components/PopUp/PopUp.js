import React from 'react';
import './PopUp.css';

const PopUp = (props) => {
    return (
        <div className={`popup ${ props.show ? 'show' : '' }`}>
            <div className="popup-background" onClick={ props.handleClick }></div>
            <div className="popup-inner">
                <h3>Select Currency</h3>
                <form onSubmit={ props.handleSubmit } name="selectCurrencyForm">
                    <select name="currency" defaultValue={ Object.keys(props.rates)[0] } onChange={ props.handleChange }>
                        { 
                            Object.keys(props.rates).map((rate, index) => {
                                return (
                                    (!props.currencyItems.includes(rate)) 
                                    && 
                                    <option key={ rate } value={ rate }>{ rate }</option>
                                )
                            }) 
                        }
                    </select>
                    <button type="submit">Add Currency</button>
                </form>
            </div>
        </div>
    )
}

export default PopUp;