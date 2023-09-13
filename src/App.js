import React, { useState } from "react";
import "./App.css";
import UserItem from "./UserItem";

function App() {
  const [users, setUsers] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    setUsers(data.data);
  };

  const toggleHandler = () => {
    if (!isToggled) {
      fetchData();
    } else {
      setUsers([]);
    }
    setIsToggled(!isToggled);
  };

  return (
    <div className="App">
      <button onClick={toggleHandler}>Show data</button>
      <ul>
        {users.map((user) => (
          <UserItem
            id={user.id}
            email={user.email}
            name={user.first_name}
            surname={user.last_name}
            profilePic={user.avatar}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
