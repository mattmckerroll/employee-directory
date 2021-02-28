import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsersinfo } from "./API";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsersinfo().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>Filter the results by first name by entering something below!</p>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
    </div>
  );
}

export default App;