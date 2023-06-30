
const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault()
        console.log('add user Handler');
    }
    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input type='text' id='username' />

            <label htmlFor="age">Age</label>
            <input type='number' id='age' />

            <button type='submit'>Add User</button>

        </form>
    );

};

export default AddUser;