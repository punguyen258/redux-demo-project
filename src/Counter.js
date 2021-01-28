import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

class Counter extends React.Component {
  dec = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }
  render() {
    return (
      <div className="blue">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Nav>
            <Nav.Link href="#pricing">
              Cart <span>{this.props.count}</span>
            </Nav.Link>
          </Nav>
        </Navbar>
        {/* <button onClick={this.dec}>-</button> */}
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
