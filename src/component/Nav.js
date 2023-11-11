import React from "react";

function Nav(props) {
 

  return (
   
      <nav className={ props.dark ? "dark" : ""}>
        <div className="react-icon">
          <i className="fa-brands fa-react"></i>
          <h1>ReactFacts</h1>
        </div>
        <button onClick={props.handleClick}>
          <p>Dark</p>
          <i className={`fa-solid fa-toggle-${props.dark ? "off" : "on"}`}></i>
          <p>Light</p>
        </button>
      </nav>

  );
}

export default Nav;
