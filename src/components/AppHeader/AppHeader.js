import React, {Component} from 'react';
import './AppHeader.css';
// import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const AppHeader = ({active, done}) => {
    return (
        <div className='app-header d-flex'>
            <h1>My Todo List</h1>
            <h2>  {active} more to do,   {done} done</h2>
        </div>
    );
};

export default AppHeader;


