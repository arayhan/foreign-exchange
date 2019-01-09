import React, { Component } from 'react';
import './Main.css';
import CurrencyCard from '../../components/CurrencyCard/CurrencyCard';
import PopUp from '../../components/PopUp/PopUp';

class Main extends Component {
    state = {
        isPopupShow: false,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.name);
    }

    handleChange = (event) => {
        const { value } = event.target;
        console.log(value);
    }

    onDelete = (event) => {
        console.log(event.target.value);
        this.props.onDeleteItems(event.target.value);
    }

    handleClick = (event) => {
        const { isPopupShow } = this.state;
        const { className } = event.target;
        (!isPopupShow || className === 'popup-background') && this.setState({ isPopupShow: !this.state.isPopupShow })
    }

    render() {
        const { rates, abbreviation, currencyItems, amount } = this.props;
        return (
            <section id="main">
                <div className="currency-card-container">
                    {
                        currencyItems.map((rate) => {
                            return (
                                <CurrencyCard
                                    key={ rate } 
                                    currency={ rate } 
                                    rates={ rates[rate] || 0 } 
                                    abbreviation={ abbreviation[rate] } 
                                    amount={ amount }
                                    onDelete={ this.onDelete }/>
                            )
                        })
                    }
                </div>
                <button onClick={ this.handleClick }>
                    <i className="fas fa-plus"></i> Add More Currencies
                </button>
                
                <PopUp 
                    show={ this.state.isPopupShow } 
                    rates={ rates } 
                    handleClick={ this.handleClick } 
                    handleSubmit={ this.handleSubmit } 
                    handleChange={ this.handleChange }
                    currencyItems={ currencyItems }
                />
            </section>
        );
    }
}

export default Main;