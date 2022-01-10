import React, { useState } from 'react';
import Header from './assets/components/Header/Header';
import About from './assets/components/Nav/About';
import Portfolio from './assets/components/Nav/Portfolio';
import Resume from './assets/components/Nav/Resume';
import ContactForm from './assets/components/Nav/Contact';
import Footer from '../src/assets/components/Footer/Footer';

function App() {
  
  const [navTitles] = useState(["About", "Portfolio", "Resume", "Contact"]);

  const [currentPage, setCurrentPage] = useState(navTitles[0]);
  const [contactSelected, setContactSelected] = useState(false);

  // const renderPage = (currentPage) => {
  //   switch (currentPage) {
  //     case "About":
  //       return <About />;
  //     case "Portfolio":
  //       return <Portfolio />;
  //     case "Resume":
  //       return <Resume />;
  //     case "ContactForm":
  //       return <ContactForm />;
  //     default:
  //       return <About />;
  //   }
  // };

  return (
    <div>
      <Header
        navTitles={navTitles}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!currentPage ? (
          <>
            <Portfolio></Portfolio>
            <About currentPage={currentPage}></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
