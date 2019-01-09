import React from 'react';
import './CurrencyCard.css';

const CurrencyCard = (props) => (
    <div className="currency-card">
        <div className="card-order-one">
            <div className="currency-value">
                <span>{ props.currency }</span>
                <span>{ props.amount }</span>
            </div>
            <div className="currency-detail">
                <span>{ props.abbreviation }</span>
                <span>
                    <em>1 USD = { props.currency } { props.value }</em>
                </span>
            </div>
        </div>
        <div className="card-order-two">
            <i className="fas fa-minus"></i>
        </div>
    </div>
);

export default CurrencyCard;