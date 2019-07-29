import React, { Component } from 'react';
import './css/App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: 'X',
      winner: false
    }
  }

  gameReset = (index) => {
    let winner = this.state.winner;
    if (winner === true) {
      this.setState({
        winner: false,
        board: Array(9).fill(null)
      })
    }
  }

  checkWinner = () => {
    let winLines = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']]
    winLines.forEach(line => {
      const [a, b, c] = line
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        this.setState({
          winner: true
        })
      }
    })
  }

  handleClick = (index) => {
    let newBoard = this.state.board;
    if (this.state.board[index] === null){
      newBoard[index] = this.state.player;
    
    this.setState({
      board: newBoard,
      player: this.state.player === 'X' ? 'O' : 'X'
    })
  }
  this.checkWinner() 
  }

  render(){
    const Box = this.state.board.map((box, index) => <div className='box' key={index} onClick={() => this.handleClick(index)}>{box}</div>)
    return (
      <div className='container'>
        <button value='reset' onClick={this.gameReset}>Reset</button>
        <h1>Tic Tac Toe App</h1>
        <div className='board'>
          {Box}
        </div>
      </div>
  );
}
}

export default App;
