import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  inc = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  dec = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.dec}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.inc}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
