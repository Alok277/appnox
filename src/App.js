import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Avatars from "./components/Avatars";

function App() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.res.data.message);
      });
  }, []);
  
  return (
    <div className="App">
      
      {users && <Avatars usersData={users} />}
    </div>
  );
}

export default App;
