import React, { useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Friends() {
const [state, setState] = useState([])

  useEffect(() => {
    getFriends()
  }, [])

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        // console.log(res.data);
       return setState(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

// console.log(state)
 


    return (
      <div>
          {state.map( e => {
              return(
                <div>
                    <h1>{e.name}</h1>
                    <h3>{e.age}</h3>
                    <h6>{e.email}</h6>
                </div>
              )
          })}
      </div>
    )
}


export default Friends;
