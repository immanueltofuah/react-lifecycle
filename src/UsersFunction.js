import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function UsersFunction() {
  //state which stores users
  const [users, setUsers] = useState([]);

  //Asynchronous function which gets users from server
  async function getUsers() {
    //gets data using axios from url and stores it in res variable
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

    //updates the users state to contain the response
    setUsers(res.data);
  }

  //hook to use lifecycle methods in functional component
  useEffect(() => {
    //calls getUsers function when component is first mounted
    getUsers();

    //gets called when the component is about to be unmounted
    return () => {
      //sets the users state to an empty array
      setUsers([]);
    };
  }, []);

  return (
    <>
      {
        //maps through the users state and renders an h1 containing the user's name
        users.map((user) => {
          return (
              <div className="background">
          <h1 className="inputs" >{user.name}</h1>
          <h1 className="inputs" >{user.username}</h1>
          <h1 className="inputs" >{user.email}</h1>
          </div>
          )
        })
      }
    </>
  );
}

export default UsersFunction;
