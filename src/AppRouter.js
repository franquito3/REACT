import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './interfaces/HomePage';
import SpeciesPage from './interfaces/SpeciesPage';
import NotFoundPage from './interfaces/NotFoundPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/species" component={SpeciesPage} />
        <Route component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
