import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './interfaces/HomePage';
import SpeciesPage from './interfaces/SpeciesPage';
import NotFoundPage from './interfaces/NotFoundPage'; 
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './App.js';
import MenuComponent from './components/menu';
import ExampleCard from './components/card'



function AppRouter() {
  return (
    <Router>
      <Header />
      <MenuComponent/>
      <Body />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/species" component={SpeciesPage} />
        <Route component={NotFoundPage} />
      </Routes>
      <ExampleCard/>
      <Footer />
    </Router>
  );
}

export default AppRouter;
