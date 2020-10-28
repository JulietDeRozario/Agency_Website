import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import Home from '../../pages/Home';
import Works from '../../pages/Works';
import About from '../../pages/About';
import StudyCase from '../StudyCase';

const Navbar = ({changeLanguage}) => {
  return (
    <nav>
      <Router>
        <Link to='/'>Accueil</Link>
        <Link to='/works'>Travaux</Link>
        <Link to='/about'>A propos</Link>
        <button onClick={() => changeLanguage()}>change language</button>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/works">
              <Works />
            </Route>
            <Route path="/works/:studySlug">
              <StudyCase />
            </Route>
          </Switch>
      </Router>
    </nav>
  )
}

export default Navbar;