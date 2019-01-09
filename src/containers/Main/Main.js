import React, { Component } from 'react';
import './Main.css';
import CurrencyCard from '../../components/CurrencyCard/CurrencyCard';
// import PopUp from '../../components/PopUp/PopUp'

class Main extends Component {
    state = {
        isPopupShow: false,
    }

    handleSubmit = () => {
        
    }

    handleClick = () => {
        const { isPopupShow } = this.state;
        console.log(isPopupShow);
        (!isPopupShow) && this.setState({ isPopupShow: !this.state.isPopupShow })
    }

    render() {
        const { rates, abbreviation } = this.props;

        return (
            <section id="main">
                <div className="currency-card-container">
                    <CurrencyCard currency="PHP" value={ rates.PHP } abbreviation={ abbreviation.PHP } amount={ this.props.amount } />
                </div>
                <button onClick={ this.handleClick }>
                    <i className="fas fa-plus"></i> Add More Currencies
                </button>
                
            </section>
        );
    }
}

export default Main;