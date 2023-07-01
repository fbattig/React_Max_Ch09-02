import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    console.log(uName, uAge);
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList, 
        { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddUser onUserAdded={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
