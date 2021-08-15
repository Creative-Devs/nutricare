import React from 'react';
import './App.css';
import FoodAPI from './FoodAPI'
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <FoodAPI />
      </div>
    )
  }
}

export default App;
