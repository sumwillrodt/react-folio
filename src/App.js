import React, { useState } from 'react';
import Header from './assets/components/Header/Header';
import About from './assets/components/Nav/About';
import ContactForm from './assets/components/Nav/Contact';

function App() {
  //const [currentPage, handlePageChange] = useState("Homepage");
  const [navTitles] = useState(["About", "Portfolio", "Resume", "Contact"]);

  const [currentPage, setCurrentPage] = useState(navTitles[0]);

  const [contactSelected, setContactSelected] = useState(false);

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
        {!contactSelected ? (
          <About></About>
          // <Portfolio></Portfolio>
          // <Resume></Resume>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
