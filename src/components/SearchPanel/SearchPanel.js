import React, {Component} from 'react';
import './SearchPanel.css';
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

export default class SearchPanel extends Component {
    constructor(){
        super();
        this.state = {term: '',
                      value: ''}
    }



    render(){
        const{handleSearchValue, filter, onFilterChange} = this.props;
        console.log('state', this.state);
        return ( 
        
        <div className='search-wrap'>
            <input className='search-input' 
            type='text' placeholder='Search' 
            onChange = {handleSearchValue}/>
          
            <ItemStatusFilter filter = {filter}
                              onFilterChange ={onFilterChange} />  
                            
        </div> 
    );

    }
  
};


    