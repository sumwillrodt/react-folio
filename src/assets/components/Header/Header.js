import React from "react";
import logo from './SW-Logo.svg';


function header(props) {
  const navTitles =  ["About", "Portfolio", "Resume", "Contact"];
  return (
    <div>
      <div id="logo-area">  
        <img src={logo} className="logo" alt="logo"/>
        <h5>Sumner Willrodt</h5>
      </div>
      <nav id="nav-bar" className="nav-bar">
        <ul id="nav-list" className="nav">
          {navTitles.map(navTitle => {
            <li className="nav-item" key={ navTitle }>
              <a href={"#" + navTitle.toLowerCase()} onClick={() => props.handlePageChange(navTitle)} className={ props.currentPage === navTitle ? "navTitle active" : "nav-link"}>{ navTitle }</a>
            </li>
          })}
        </ul>

      </nav>
    </div>
  )
}

export default Headers;