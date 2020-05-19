import React, {Component} from 'react';
import './TodoListItems.css';

const TodoListItems = (props) =>{
    
  
    const {label, done, important, onMarkImportant, onDelete, onLabelClick } = props;

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important'
        }
      return (
          <span className={classNames}>
             <span className='todo-list-item-label'
                    onClick={onLabelClick}>
                 {label}
             </span>
            <span>
                 <button className='btn btn-outline-success btn-sm'
                         onClick={onMarkImportant}>
                 <i className='fa fa-exclamation' />
             </button>
             <button className='btn btn-outline-danger btn-sm'
                 onClick={onDelete}
             >
                 <i className='fa fa-trash-o' />
             </button>
            </span>
         </span>
      );
    };
    export default TodoListItems;