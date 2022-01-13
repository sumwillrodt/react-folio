import React, { useState } from 'react';
import './App.css';
import Header from './assets/components/Header/Header';
import About from './assets/components/Nav/About';
import Portfolio from './assets/components/Nav/Portfolio';
import Resume from './assets/components/Nav/Resume';
import ContactForm from './assets/components/Nav/Contact';
import Footer from '../src/assets/components/Footer/Footer';


function App() {
  
  const sections =  [
    { title: "About", url:"#" },
    { title: "Portfolio", url:"#" },
    { title: "Resume", url:"#" }
  ];

  // const sections =  [ "About", "Portfolio",  "Resume" ];

  const [ currentPage, changedPage ] = useState("Homepage");

  const renderPage = (currentPage) => {
    switch(currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "ContactForm":
        return <ContactForm />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header 
        sections={sections}
        currentPage={currentPage}
        changedPage={changedPage} 
        />
      <main>{renderPage(currentPage)}</main>
      <Footer/>
    </div>
  );
}

export default App;