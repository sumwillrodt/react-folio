import React from "react";
import logo from '../../../SW-Logo.svg';


function Header(props) {
  const navTitles =  ["About", "Portfolio", "Resume", "Contact"];
  return (
    <header className="flex-row px-2">
      <div id="logo-area">  
        <img src={logo} className="logo" alt="logo"/>
        <h5>Sumner Willrodt</h5>
      </div>
      <nav id="nav-bar">
        <ul id="nav-list" className="flex-row">
          {navTitles.map(navTitle => {
            <li className="nav-item" key={ navTitle }>
              <a href={"#" + navTitle.toLowerCase()} onClick={() => props.handlePageChange(navTitle)} className={ props.currentPage === navTitle ? "navTitle active" : "nav-link"}>{ navTitle }</a>
            </li>
          })}
        </ul>

      </nav>
    </header>
  )
}

export default Header;