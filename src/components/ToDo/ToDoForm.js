import './ToDoForm.css';
import React, {useState} from "react";
import Button from "../UI/Button";

const ToDoForm = (props) => {

    //Users inputted item
    const [enteredValue, setEnteredValue] = useState('');

    //Indicated if the user entered something right or not, see label tag below for result.
    const [usersInputIsValid, setUsersInputIsValid] = useState(true);

    const toDoInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setUsersInputIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        //If the user hasn't inputted any text then cancel the action, but we want a visual indicator that the user has done something wrong.
        if (enteredValue.trim().length === 0){
            setUsersInputIsValid(false);
            return;
        }
        props.onAddToDo(enteredValue);
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className="form-control">
                    <label>What do you want to do today?</label>
                    <input style={{borderStyle: !usersInputIsValid ? 'red' : 'black', background: !usersInputIsValid ? 'lightpink' : 'transparent'}} type="text" onChange={toDoInputChangeHandler}/>
                </div>
                <Button type="submit">Add</Button>
            </form>
        </div>
    );
};

export default ToDoForm;