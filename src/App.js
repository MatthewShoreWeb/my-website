
import './App.scss';
import Header from './Components/Header/Header';
import React, { useState } from 'react';
import HomePage from './Components/Pages/HomePage';
import Footer from './Components/Footer/Footer';

function App() {
  const [page, setPage] = useState(<HomePage />);
  return (
    <div id='websiteContainer'>
      <Header setPage={setPage} />
      {page}
      <Footer />
    </div>
  );
};

export default App;
