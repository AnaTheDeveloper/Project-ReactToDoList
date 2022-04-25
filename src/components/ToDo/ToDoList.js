import './ToDoList.css';
import React from 'react';
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {

    return (
        <div>
            <p className="list-subtitle">My List:</p>
            <ul className="to-do-list">
                {props.items.map(toDo => (
                    <ToDoItem key={toDo.id} id={toDo.id} onDelete={props.onDeleteItem} > {toDo.text} </ToDoItem>))
                }
            </ul>
        </div>
    );
};

export default ToDoList;