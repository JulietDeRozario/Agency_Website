import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import Home from '../../pages/Home';
import Works from '../../pages/Works';
import About from '../../pages/About';
import StudyCase from '../StudyCase';
import './dist/navbar.css'

const Navbar = ({changeLanguage}) => {
  return (
    <div className="main">
      <Router>
        <nav>
          <Link to='/'className="nav-link">Accueil</Link>
          <Link to='/works'className="nav-link">Travaux</Link>
          <Link to='/about'className="nav-link">A propos</Link>
          {
            localStorage.getItem("language") === "en" &&
            <img src="https://cdn.countryflags.com/thumbs/france/flag-round-250.png" onClick={() => changeLanguage()} />
          }
          {
            localStorage.getItem("language") !== "en" &&
            <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png" onClick={() => changeLanguage()} />
          }
        </nav>
        
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
    </div>
  )
}

export default Navbar;