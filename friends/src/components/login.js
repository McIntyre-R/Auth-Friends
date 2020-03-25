import React, {useState} from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

function Login(props) {
 const [state, setState] = useState({
        credentials: {
          username: "",
          password: ""
        }
      })
console.log(props)


const handleChanges = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };


    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }


export default Login;
