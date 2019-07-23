import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render(){
    return (
      <div className='container'>
        <h1>Tic Tac Toe App</h1>
        <div className='board'>
          <div className='box'>X</div>
          <div className='box'>X</div>
          <div className='box'>X</div>
          <div className='box'>X</div>
          <div className='box'>X</div>
          <div className='box'>X</div>
          <div className='box'>X</div>
          <div className='box'>X</div>
          <div className='box'>X</div>
        </div>
      </div>
  );
}
}

export default App;
