import React, { useState } from 'react';
import Header from './assets/components/Header/Header';
import About from './assets/components/Nav/About';
import Portfolio from './assets/components/Nav/Portfolio';
import Resume from './assets/components/Nav/Resume';
import ContactForm from './assets/components/Nav/Contact';
import Footer from '../src/assets/components/Footer/Footer';

function App() {
  
  // const [navTitles] = useState(["About", "Portfolio", "Resume", "Contact"]);

  const [currentPage, handlePageChange] = useState("Homepage");

  const renderPage = (currentPage) => {
    switch (currentPage) {
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
      <main>
      <Header>
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      </Header>
      <div>{renderPage(currentPage)}</div>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
