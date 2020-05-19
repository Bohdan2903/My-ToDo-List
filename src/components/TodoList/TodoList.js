import React from 'react';
import './TodoList.css';
import TodoListItems from '../TodoListItems/TodoListItems';

const TodoList = (props) => {

    const elements = props.todoData.map((item) => {
        const {id , ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItems
                    {...itemProps}
                    onDelete={()=>{ props.onDelete(id)}}
                    onLabelClick={()=>{ props.onLabelClick(id)}}
                    onMarkImportant={()=>{ props.onMarkImportant(id)}}
                />
            </li>
        )
    });

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );

};

export default TodoList;

