import React from 'react'
import Snake from './snake/snakeContainer'
import Millipede from './millipede/millipedeContainer'
import { connect } from 'react-redux';
import getActions from './../../store/getActions';
import setActions from './../../store/setActions';
import games from './games'


const mapStateToProps = (state) => {
    let props = {
      highscore: state.highscore,
      error: state.error
    };
    return props;
};

const mapDispatchToProps = (dispatch, location) => {
    return {
      getHighscore: game => {
        dispatch(getActions.getHighscore(game));
      },
      setHighscore: payload => {
        dispatch(setActions.setHighscore(payload));
      },
    }
}


class Game extends React.Component {
  getGame({ name }){
  }
  render() {
    let { props } = this; 
    let game = games().find((game) => game.id === props.match.params.game)
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
     
    <div>
      {
        (function() {
        switch(game.id) {
          case 'snake':
            return <Snake {...props}/>
          case 'millipede':
            return <Millipede {...props}/>
          default:
            return null;
        }
        })()
      }
    </div> 
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);

