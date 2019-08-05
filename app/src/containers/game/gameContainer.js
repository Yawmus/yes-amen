import React from 'react'
import Snake from './snakeContainer'
import { connect } from 'react-redux';
import getActions from './../../store/getActions';
import setActions from './../../store/setActions';

const mapStateToProps = (state) => {
    let props = {
        highscore:state.highscore,
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

  componentDidUpdate(prevProps)
  {
    console.log('parent did update', this.props);
  }

  render() {
    let { props } = this; 
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <Snake
        {...props}/>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);

