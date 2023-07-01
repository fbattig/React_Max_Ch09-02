import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+enteredAge < 1) {

            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0)'
            }); 
            return;
        }
        props.onUserAdded(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    }


    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () => {
      setError(null);
    };

    return (
        <>
           {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>

                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input type='text' id='username' onChange={userNameChangeHandler} value={enteredUserName} />

                    <label htmlFor="age">Age</label>
                    <input type='number' id='age' onChange={userAgeChangeHandler} value={enteredAge} />

                    <Button type='submit' >Add User</Button>

                </form>
            </Card>
        </>


    );

};

export default AddUser;