import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

class UserClass extends React.Component{
    constructor() {
        super();
        this.state = { users: []};
    }
    async getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {

            return response.json();
        })
        .then((users) => {

            this.setState({ users: users});
        });
    }

    componentDidMount() {

        this.getUsers();
    }

    componentDidUpdate() {
        console.log("state updated");
    }

    componentWillUnmount() {

        console.log("unmounting");
    }

    render() {
        return(
            <>
            {this.state.users.map((user) => {
                return <h1 key={user.id}>{user.name}</h1>;
            })}
            </>
        );
    }
}

export default UserClass;