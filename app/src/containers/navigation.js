import React from 'react';
import Home from './home';
import Login from './login'
import Games from './games'
//import Counter from './counter'
import Contact from './contact'
import Resume from './resume'
import Blog from './blog'
import RedirectTo from './return'
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
            <NavLink activeClassName="active" to="/games">
              Games
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/resume">
              Resume
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
          <Route exact path="/" component={() => RedirectTo('/home')}/>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/games" component={Games} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}


export default Navigation;
