import'./ToDoForm.css';
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

    //Form Handler
    const formSubmitHandler = event => {
        event.preventDefault();
        //If the user hasn't inputted any text then cancel the action, but we want a visual indicator that the user has done something wrong.
        if (enteredValue.trim().length === 0){
            setUsersInputIsValid(false);
            return;
        }
        props.onAddToDo(enteredValue);

        //Once user has added something, remove what was in the box and reset it back to a black section.
        setEnteredValue('');
    };

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                {/*Dynamically styling classes*/}
                {/*CSS Modules: className={`$ {styles['form-control']} ${!usersInputIsValid && styles.invalid}`}*/}
                <div className={`form-control ${!usersInputIsValid ? 'invalid': ''}`}>
                    <label>What do you want to do today?</label>
                    <input type="text" value={enteredValue} onChange={toDoInputChangeHandler}/>
                </div>
                <Button type="submit">Add</Button>
            </form>
        </div>
    );
};

export default ToDoForm;