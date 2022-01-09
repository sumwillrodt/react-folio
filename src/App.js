import React, { useState } from 'react';
import Header from './assets/components/Header/Header';
import About from './assets/components/Nav/About';

function App() {
  //const [currentPage, handlePageChange] = useState("Homepage");

  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
