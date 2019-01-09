import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
// import InputMask from 'react-input-mask';
import './App.css';
import Main from '../Main/Main';
import Loading from '../../components/Loading/Loading';

class App extends Component {

	state = {
		amount: 0,
		defaultCurrency: "USD",
        rates: {},
        abbreviation: {},
        isLoading: false
	}

    componentDidMount = () => {
        this.setState({ isLoading: true });
        fetch(`https://api.exchangeratesapi.io/latest?base=${ this.state.defaultCurrency }`)
            .then(res => res.json())
            .then(res => this.setState({ rates: res.rates, isLoading: false }));

        fetch('https://openexchangerates.org/api/currencies.json')
            .then(res => res.json())
            .then(res => this.setState({ abbreviation: res, isLoading: false }));
    }

    handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
        this.setState({ amount: parseInt(value) })
    }

	render() {
        console.log(this.state.amount);
		const { isLoading, defaultCurrency } = this.state;
		return (
            <div className="App">
                <Loading show={ isLoading ? 'show' : 'hide' }/>
                { 
                    !isLoading
                    &&
                    <div className="wrapper">
                        <header>
                            <div className="header-background"></div>
                            <div className="header__inner">
                                <div className="circle-icon header__currency-acronym">
                                    { defaultCurrency }
                                </div>
                                <span>{ this.state.abbreviation[defaultCurrency] }</span>
                                <span>( Type on the input text below )</span>

                                <CurrencyInput
                                    value={ this.state.amount } 
                                    onChangeEvent={ this.handleChange }
                                />

                                {/* input mask */}
                                {/* <InputMask mask="$ 99999999999" value={props.value} onChange={props.onChange}> */}
                            </div>
                        </header>
                        <Main 
                            abbreviation={ this.state.abbreviation }
                            rates={ this.state.rates }
                            amount={ this.state.amount }
                        />
                    </div>
                }
            </div>
		);
	}
}

export default App;
