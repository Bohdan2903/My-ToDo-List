import React, { Component, Fragment } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            class: "off",
            label: "Click me"
        };
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState() {
        this.setState(previousState => ({
            isOpen: !this.state.isOpen
        }));
        let nameOfClass = (this.state.isOpen)? "on": "off";
        this.setState(() => ({ class: nameOfClass }));
    }
    render() {
        console.log("isOpen: ", this.state.isOpen);
        let dropdownText;
        if (this.state.isOpen) {
            dropdownText = <div>Content of dropdown</div>;
        }
        return (
            <Fragment>
                <button className={this.state.class} onClick={this.toggleState}>{this.state.label}</button>
                {dropdownText}
            </Fragment>
        );
    }
}

export default Dropdown;
