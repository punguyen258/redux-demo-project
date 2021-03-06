import React from 'react';
import Counter from './Counter';
import Child from './Child';
import './App.css'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// const initialState = {
//   count: 0
// }

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// }

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <Child />
        </div>
      </Provider>
    )
  }
}

export default App;
