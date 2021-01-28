import React from 'react';
import { connect } from 'react-redux';

class Child extends React.Component {
  inc = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }
  render() {
    return (
      <div className="green">
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Child);
