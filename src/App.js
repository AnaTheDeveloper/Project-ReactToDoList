import './App.css';
import React, {useState} from "react";
import ToDoList from "./components/ToDo/ToDoList";
import ToDoForm from "./components/ToDo/ToDoForm";

const App = () => {

    const [toDoListDummyData, setToDoListDummyData] = useState([
        {text: 'Do Laundry', id: '1'},
        {text: 'Udemy React Course 6 hrs', id: '2'},
        {text: 'Cook Dinner', id: '3'}
    ]);

    //CRUD
    const addToDoHandler = enteredText => {
        setToDoListDummyData(
            prevState => {const updatedToDo = [...prevState];
                updatedToDo.unshift({text: enteredText, id: Math.floor(Math.random() * 20).toString() });
                return updatedToDo;
            });
    };

    const deleteToDoHandler = toDoId => {
        setToDoListDummyData(
            prevState => {const updatedToDo = prevState.filter(toDo => toDo.id !== toDoId);
            return updatedToDo;}
        );
    };

    //No current To Do
    let content = (
        <p style={{ textAlign: 'center' }}> Anything you need to get done today? </p>
    );

    //Checking if there are any to do items.
    if (toDoListDummyData.length > 0) {
        content = (<ToDoList items={toDoListDummyData} onDeleteItem={deleteToDoHandler}/>)
    }

    return (
        <div>

            <p className="to-do-title">To Do Planner</p>

            <section id="to-do-form">
                <ToDoForm onAddToDo={addToDoHandler} />
            </section>

            <section id="to-do">
                {content}
            </section>
        </div>
    );
};

export default App;
