import React from 'react';

const PopUp = (props) => {
    return (
        <div className={`popup ${ props.show ? 'show' : '' }`}>
            <div className="popup-background" onClick={ this.handleClick }></div>
            <div className="popup-inner">
                <h3>Select Currency</h3>
                <form onSubmit={ this.handleSubmit } name="selectCurrencyForm">
                    <select>
                        { Object.keys(rates).map(rate => (
                            <option key={ rate } value={ rate }>{ rate }</option>
                        )) }
                    </select>
                    <button onClick={ this.handleClick }>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PopUp;