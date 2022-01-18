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
    { title: "About", url: About },
    { title: "Portfolio", url: Portfolio },
    { title: "Resume", url: Resume }
  ];

  // const sections =  [ "About", "Portfolio",  "Resume" ];

  const [ currentPage, setCurrentPage ] = useState("About"); 

  const renderPage = (currentPage) => {
    console.log(currentPage);
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
        setCurrentPage={setCurrentPage} 
        />
      <main>{renderPage(currentPage)}</main>
      <Footer/>
    </div>
  );
}

export default App;