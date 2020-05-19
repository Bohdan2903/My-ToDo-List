import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            important: this.props.important,
            done: false
        }
    }

    toggleImportant = (e) => {
        this.setState((prevState) => ({ important: !prevState.important }));
    }
    toggleDone = (e) => {
        this.setState(() => ({ done: !this.state.done }));
    }


    render() {

        const {label, id} = this.props;

        let className = "";

        if (this.state.important) {
            className += "important";
        }

        if (this.state.done) {
            className += " done";
        }

        return (
            <div>
            <span onClick={this.toggleDone} className={className}>
                {id}. {label}
            </span>
            <button onClick={this.toggleImportant} className="btn btn-outline-danger btn-sm">
                <i className="fa fa-exclamation"/>
            </button>
            <button className="btn btn-outline-success btn-sm">
                <i className="fa fa-trash-o"/>
            </button>
            </div>
        );
    
    }
}

