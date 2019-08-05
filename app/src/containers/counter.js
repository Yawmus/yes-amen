import React from 'react';
import ReactDOM from 'react-dom';
import { ReactReduxContext } from 'react-redux'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';

const mapDispatchToProps = dispatch => {
  return {
    increment: () =>
      dispatch({
        type: 'INCREMENT'
      }),
    decrement: () =>
      dispatch({
        type: 'DECREMENT'
      })
    
  }
}

const mapStateToProps = state => {
  let props = {
    counter: state.counter,
  }
  return props;
}

const Counter = ({counter, increment, decrement}) => {
  return (
    <div>
      <p>{counter}</p>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}
      //<button onClick={increment(store)}>Increment</button>
      //<button onClick={decrement(store)}>Decrement</button>

//const render = () => ReactDOM.render(<Counter />,
                      //document.getElementById('root'))
//render()
//store.subscribe(render);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

