import React from 'react';

const CurrencySelectForm = (props) => (
    <form onSubmit={ props.handleSubmit }>
        <select>
            { props.rates.map(rate => (
                <option>{ rate }</option>
            )) }
        </select>
    </form>
);

export default CurrencySelectForm;