import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import './Header.css';

class Header extends Component {
    state = {
        amount: "0",
        defaultCurrency: "USD"
    }
    
    handleChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
            <header>
                <div className="header-background"></div>
                <div className="header__inner">
                    <div className="circle-icon header__currency-acronym">
                        { this.state.defaultCurrency }
                    </div>
                    <span>United States Dollars</span>
                    <span>( Type on the input text below )</span>
                    <CurrencyInput
                        value={ this.state.amount } 
                        onChangeEvent={ this.handleChange }
                        prefix="$ "
                        thousandSeparator="."
                    />
                </div>
            </header>
        )
    }
}

export default Header;