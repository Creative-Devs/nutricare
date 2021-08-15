import React from 'react';
import './App.css';
import FoodAPI from './FoodAPI'
import Header from './Header'
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <FoodAPI />
      </div>
    )
  }
}

export default App;
