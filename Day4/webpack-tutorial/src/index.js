import moment from "moment";
const getUserModule = () => import("./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});


/* import "./style.css";
import "./style.scss";
console.log("Hello webpack!");

const fancyFunc = () => {
    return [1, 2];
  };
  
  const [a, b] = fancyFunc(); */

/* import React, { useState } from "react";
import { render } from "react-dom";
import { getUsers } from "./common/usersAPI";
import "./style.css";
getUsers().then(json => console.log(json)); */
/* 
function App() {
  const [state, setState] = useState("CLICK ME");

  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root")); */
