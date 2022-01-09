import React, { useEffect } from "react";
import logo from "../../../SW-Logo.svg";
import { capitalizeFirstLetter } from "../../../utils/helpers";

function Header(props) {
  // const navTitles =  ["About", "Portfolio", "Resume", "Contact"];
  const {
    navTitles = [],
    setCurrentPage,
    contactSelected,
    currentPage,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <header className="flex-row px-2">
      <div id="logo-area">  
        <img src={logo} className="logo" alt="logo"/>
        <h5>Sumner Willrodt</h5>
      </div>
      <nav id="nav-bar">
        <ul id="nav-list" className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* {navTitles.map(navTitle => {
            <li className="nav-item" key={ navTitle }>
              <a href={"#" + navTitle.toLowerCase()} onClick={() => props.handlePageChange(navTitle)} className={ props.currentPage === navTitle ? "navTitle active" : "nav-link"}>{ navTitle }</a>
            </li>
          })} */}
        </ul>

      </nav>
    </header>
  )
}

export default Header;