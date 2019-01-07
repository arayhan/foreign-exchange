import React, { Component } from 'react';
import './Main.css';
import CurrencyCard from '../../components/CurrencyCard/CurrencyCard';
import CurrencySelectForm from '../../components/CurrencySelectForm/CurrencySelectForm';

class Main extends Component {
    state = {
        rates: {},
        localRates: {},
        isPopupShow: false,
        isLoading: false
    }

    componentDidMount = () => {
        this.setState({ isLoading: true });
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then(res => res.json())
            .then(res => this.setState({ rates: res.rates, isLoading: false }));
    }

    handleSubmit = () => {

    }

    handleClick = (event) => {
        const { isPopupShow } = this.state;
        const { className } = event.target;

        if (!isPopupShow || className === 'popup-background') {
            this.setState({ isPopupShow: !this.state.isPopupShow })
        }
    }

    render() {
        console.log(this.state.rates);

        return (
            <section id="main">
                <div className="currency-card-container"></div>
                <button onClick={ this.handleClick }>
                    <i className="fas fa-plus"></i> Add More Currencies
                </button>
                {/* <p>{ this.state.rates.map(rate => ( 
                    <li>rate</li> 
                )) }</p> */}

                
                <div className={ this.state.isPopupShow ? 'popup show' : 'popup' }>
                    <div className="popup-background" onClick={ this.handleClick }></div>
                    <div className="popup-inner">
                        <h3>Select Currency</h3>
                        <form onSubmit={ this.handleSubmit }>
                            { 
                                !this.state.isLoading 
                                ?  <p>Loading...</p> 
                                : <CurrencySelectForm handleSubmit={ this.handleSubmit } />
                            }
                            <button onClick="">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Main;