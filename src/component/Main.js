import React from "react";


function Main(props) {

  return (
   <div
        className={props.dark ? "container-dark" : "container"}>
        <h1 >Fun facts about Reacts</h1>

        <ul >
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
  );
}

export default Main;
