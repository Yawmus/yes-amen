import React, { useState } from 'react';
import Home from './home';
import Login from './login'
import Games from './games'
import Game from './game'
//import Counter from './counter'
import Contact from './contact'
import Resume from './resume'
import Blog from './blog'
import RedirectTo from './return'
import NotFound from './notFound'
import './style.css';
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import { firebase } from './../firebase'
import 'firebase/auth';

function Navigation(){
  const [user, setAuth] = useState(null);

  let signOut = function(){
    firebase.auth().signOut();
    setAuth(null) 
  }

  console.log('signed in user', user);
  return (
    <Router>
      {
        user === null ? 
        <div className='auth'>
          <Link to="/login">
            Sign in
          </Link>
        </div> :
        <div className='auth'>
          <a href="#" onClick={ () => 
            { 
              signOut();
            }}>
            Sign out
          </a>
        </div>
      }
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
          <Route 
            path="/login" 
            render={(props) => <Login {...props} signIn={setAuth} />}
          />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/games" component={Games} />
          <Route path="/contact" component={Contact} />
          <Route path="/:id" component={Game} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}


export default Navigation;
