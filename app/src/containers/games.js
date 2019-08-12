import React from 'react'
import Game from './canvasGames/gameContainer'
import NotFound from './notFound'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import games from './canvasGames/canvasGames';
import Return from './return'

class Games extends React.Component {
  render() {
    let { props } = this; 
    let match = props.match;
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    console.log(match);
    return (
      <Router>
        <div className="gameNav">
          <ul>
            {games().map(({ name, id }) => (
              <NavLink activeClassName="active" to={`${match.url}/${id}`}>
                <li key={id}>
                  { name }
                </li>
              </NavLink>
            ))}
          </ul>
          <hr/>
          <Switch>
            <Route exact path={`${match.path}`} component={()=>Return(match.path)}/>
            <Route path={`${match.path}/:game`} component={Game} /> 
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Games;
