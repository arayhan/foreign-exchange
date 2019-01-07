import React from 'react';
import './CurrencyCard.css';

const CurrencyCard = (props) => (
    <div className="currency-card">
        <div className="card-order-one">
            <div className="currency-value">
                <span>IDR</span>
                <span>120.000,00-</span>
            </div>
            <div className="currency-detail">
                <span>Indonesian Rupiah</span>
                <span>
                    <em>1 USD = IDR 14.500</em>
                </span>
            </div>
        </div>
        <div className="card-order-two">
            <i className="fas fa-minus"></i>
        </div>
    </div>
);

export default CurrencyCard;