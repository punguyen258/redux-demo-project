import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  dec = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }
  render() {
    return (
      <div className="blue">
        <button onClick={this.dec}>-</button>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);
