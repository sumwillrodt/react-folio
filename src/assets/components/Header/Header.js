import React from "react";
import { Toolbar, Link } from "@mui/material";
import logo from "../../../SW-Logo.svg";


function Header(props) {
  const { sections, currentPage, setCurrentPage } = props;
  return (
    <header className="">
      <div id="logo-area">  
        <a href="/About"><img src={logo} className="logo" alt="logo"/></a>
        <h3 id="header-title" sx={{px: 2, flexShrink: 0}}>Sumner Willrodt</h3>
      </div>
      <nav> 
        <Toolbar component="nav" variant="dense">
          {sections.map((section) => (
            <Link id="nav-section" color="light" key={section.title} variant="inherit" underline="none" onClick={() => setCurrentPage(section.title) } sx={{ px: 3, flexShrink: 0 }} >
              {section.title}
            </Link>
          ))}
          <button className="contact-btn" variant="containedPrimary" sx={{ boxShadow: 3 }} href="/ContactForm"> Contact</button>
        </Toolbar>
      </nav>
    </header>
  );
}

export default Header;