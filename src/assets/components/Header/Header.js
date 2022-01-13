import React from "react";
import { Toolbar, Link } from "@mui/material";
import logo from "../../../SW-Logo.svg";

function Header(props) {
  const { sections } = props;
  return (
    <header className="">
      <div id="logo-area">  
        <a href="/About"><img src={logo} className="logo" alt="logo"/></a>
        <h5 sx={{px: 2, flexShrink: 0}}>Sumner Willrodt</h5>
      </div>
      <nav> 
        <Toolbar component="nav" variant="dense">
          {sections.map((section) => (
            <Link color="inherit" key={section.title} variant="inherit" underline="none" href={section.url} sx={{ px: 3, flexShrink: 0 }} >
              {section.title}
            </Link>
          ))}
          <button className="contact-btn" variant="containedPrimary" href="/ContactForm"> Contact</button>
        </Toolbar>
      </nav>
    </header>
    // <header className="flex-row space-between">
    //   <div id="logo-area" className="center">  
    //     <a href="/"><img src={logo} className="logo" alt="logo"/></a>
    //     <h5 className="">Sumner Willrodt</h5>
    //   </div>
    //   <nav id="nav-bar">
    //     <ul id="nav-list" className="flex-row">
    //       <li className="mx-2">
    //         <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
    //           About me
    //         </a>
    //       </li>
    //       <li className={`mx-2 ${contactSelected && 'navActive'}`}>
    //         <span onClick={() => setContactSelected(true)}>Contact</span>
    //       </li>
    //       {navTitles.map(navTitle => {
    //         <li className={`nav-item ${ currentPage.name === navTitle.name && !contactSelected && "navActive"}`} key={ navTitle.name }>
    //           <span onClick={() => {
    //             setCurrentPage(navTitle);
    //             setContactSelected(false);
    //           }}></span>
    //           {/* <a href={"#" + navTitle.toLowerCase()} onClick={() => props.handlePageChange(navTitle)} className={ props.currentPage === navTitle ? "navTitle active" : "nav-link"}>{ navTitle }</a> */}
    //         </li>
    //       })}
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default Header;