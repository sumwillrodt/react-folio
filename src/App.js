import React from 'react';
import Header from './assets/components/Header/Header';
import About from './assets/components/Nav/About';
import Portfolio from './assets/components/Nav/Portfolio';
import Resume from './assets/components/Nav/Resume';
import ContactForm from './assets/components/Nav/Contact';
import Footer from '../src/assets/components/Footer/Footer';

function App(props) {
  
  const sections =  [
    { title: "About", url:"#" },
    { title: "Portfolio", url:"#" },
    { title: "Resume", url:"#" }
  ];

  // const sections =  [ "About", "Portfolio",  "Resume" ];

  const { currentPage } = props;

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
      <Header sections= {sections}/>
      <main>{renderPage(currentPage)}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;