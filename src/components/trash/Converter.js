import React from 'react';

class Converter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currency: props.currency
        };
    }

    handleChangeCurrency = event => {
        this.setState({ currency: this.state.currency == "€"? "$": "€" });
    }

    render() {
        return (
            <div onClick={this.handleChangeCurrency}>
                Current currency: {this.state.currency}
                ({this.props.children})
            </div>
        );
    }
}

export default Converter;
