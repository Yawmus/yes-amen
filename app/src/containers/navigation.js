import React from 'react';
import App from './App';
import Home from './home';
import Login from './login'
import Game from './game/gameContainer'
import Counter from './counter'
import Contact from './contact'
import GoHome from './goHome'
import NotFound from './notFound'
import './style.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'

function Navigation(){
  return (
    <Router>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/game">
              Game
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/counter">
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/" component={GoHome}/>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/game" component={Game} />
          <Route path="/counter" component={Counter} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}


export default Navigation;
