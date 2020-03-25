import React, { useState } from 'react'

import { axiosWithAuth } from "../utils/axiosWithAuth";


function FriendsAdd(props) {

const [state, setState] = useState({
        friend: {
          name: '',
          age: 0,
          email: ''
        }
      })



const handleChanges = e => {
    setState({
      friend: {
        ...state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", state.friend)
      .then(res => {
        props.history.push("/friends");
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  };
    return (
        <div>
          <form onSubmit={addFriend}>
            <input
              type="text"
              name="name"
              value={state.friend.name}
              onChange={handleChanges}
            />
            <input
              type="number"
              name="age"
              value={state.friend.age}
              onChange={handleChanges}
            />
            <input
              type="text"
              name="email"
              value={state.friend.email}
              onChange={handleChanges}
            />
            <button>Submit</button>
          </form>
        </div>
      );

}




export default FriendsAdd;






    



