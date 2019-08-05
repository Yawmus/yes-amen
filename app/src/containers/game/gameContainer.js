import React from 'react'
//import Snake from './snake/snakeContainer'
import Millipede from './millipede/millipedeContainer'
import { connect } from 'react-redux';
import getActions from './../../store/getActions';
import setActions from './../../store/setActions';

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
  render() {
    let { props } = this; 
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Millipede
        {...props}/>
      //<Snake
        //{...props}/>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);

