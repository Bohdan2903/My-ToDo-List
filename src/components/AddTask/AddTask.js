import React from 'react';

const AddTask = (props) => {
    let taskLabel = React.createRef();
    return (
        <div className="search-wrap">
            <input type="text" ref={taskLabel}></input>
            <button className="btn btn-info" onClick={() => props.addTask(taskLabel.current.value)}>Add task</button>
        </div>
    );
}

export default AddTask;
