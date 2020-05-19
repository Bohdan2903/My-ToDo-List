import React, {Component} from 'react';
import './ItemStatusFilter.css';

const ItemStatusFilter =(props)=>{
    const arrayButtons = [
        {name: 'all', label:'all', style:'newBtn'},
        {name: 'active', label:'active', style:'newBtn'},
        {name: 'done', label:'done', style:'newBtn'}
    ];


        const{filter, onFilterChange} = props;

        const buttons = arrayButtons.map(({name, label, style})=>{
                const clazz = ( filter ===name)? 'btn-info' :'btn-outline-secondary';
                return(
                    <button key ={name} className={`btn ${clazz} ${style}`}
                            onClick={()=>onFilterChange(name)} >
                            {label}
                    </button>
                )
        });

        return (
            <div className='btn-group'>
                {buttons}
                
            </div>
        );

};
export  default ItemStatusFilter;