import './ToDoItem.css';
import React from 'react';


const ToDoItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <div>
            <li className="to-do-item" onClick={deleteHandler}>
                {props.children}
            </li>
        </div>
    );
};

export default ToDoItem;