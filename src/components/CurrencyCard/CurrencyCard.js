import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './CurrencyCard.css';
    

const CurrencyCard = (props) => {
    return (
        <div className="currency-card">
            <div className="card-left">
                <div className="currency-value">
                    <span>
                        {props.currency}
                    </span>
                    <span>
                        <CurrencyFormat 
                            value={ props.amount * props.rates } 
                            displayType={ 'text' } 
                            thousandSeparator={ true } 
                        />
                    </span>
                </div>
                <div className="currency-detail">
                    <span>{ props.abbreviation }</span>
                    <span>
                        <em>1 USD = { props.currency } { props.rates }</em>
                    </span>
                </div>
            </div>
            {/* <div className="card-order-two" onClick={ props.onDelete(props.currency) }> */}
            <button className="btn-delete" value={ props.currency } onClick={ props.onDelete }>
                <i className="fas fa-minus"></i>
            </button>
        </div>
    );
}

export default CurrencyCard;