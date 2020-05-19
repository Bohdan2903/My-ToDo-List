import React, { Fragment, Component } from "react";
import ListItem from "./ListItem"

class ItemsList extends Component {

    constructor (props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.state = {
            items: this.props.data.items
        }
    }
    filterList(event) {
        var filtered = this.props.data.items.filter(item => {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: filtered})
    }

    render() {
        return (
            <Fragment>
                <h2>{this.props.data.title}</h2>
                <input placeholder="Поиск" onChange={this.filterList} />
                <ul>
                    {this.state.items.map((element, index) => 
                        <ListItem key={index} name={element} />    
                    )}
                </ul>
            </Fragment>
        );
    }
}

export default ItemsList;