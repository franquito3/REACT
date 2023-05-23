import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './interfaces/HomePage';
import SpeciesPage from './interfaces/SpeciesPage';
import NotFoundPage from './interfaces/NotFoundPage'; 
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import MenuComponent from './components/menu';

function AppRouter() {
  const [selectedApi, setSelectedApi] = useState(1); // Estado para almacenar el tipo de API seleccionado

  return (
    <Router>
      <Header />
      <MenuComponent onApiChange={setSelectedApi} />
      <Body selectedApi={selectedApi} setSelectedApi={setSelectedApi} />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/species" component={SpeciesPage} />
        <Route component={NotFoundPage} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
