import {useState} from 'react';
import UserList from './UserList';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = () => {
const [enteredUserName, setEnteredUserName] = useState('');
 const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length ===0){
            return;
        }
        if(+enteredAge < 1   ){
            return;
        }
        console.log(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    }


    const userNameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value);
    }

     const userAgeChangeHandler = (event) =>{
         setEnteredAge(event.target.value);
     }

    return (
        <Card className={classes.input}>

            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input type='text' id='username' onChange={userNameChangeHandler} value={enteredUserName}/>

                <label htmlFor="age">Age</label>
                <input type='number' id='age'  onChange={userAgeChangeHandler} value={enteredAge}/>

                <Button type='submit' >Add User</Button>

            </form>
        </Card>


    );

};

export default AddUser;