import React, { Component } from 'react';
import './css/App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: 'X',
      winner: false,
      player1: 0,
      player2: 0
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
    let player1 = this.state.player
    let player2 = this.state.player
    let winLines = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']]
    winLines.forEach(line => {
      const [a, b, c] = line
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c] && player1 === 'X') {
        this.setState({
          winner: true,
          player1: this.state.player1 + 1,
         
        })
      } else if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c] && player1 === 'O'){
        this.setState({
          player2: this.state.player2 + 1,
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
    const player1 = this.state.player1;
    const player2 = this.state.player2;
    const Box = this.state.board.map((box, index) => <div className='box' key={index} onClick={() => this.handleClick(index)}>{box}</div>)
    return (
      <div className='container'>
        <button value='reset' onClick={this.gameReset}>Reset</button>
        <h2>Player 1 Score : {player1}     Player 2 Score : {player2}</h2>
        <h1>Tic Tac Toe App</h1>
        <div className='board'>
          {Box}
        </div>
      </div>
  );
}
}

export default App;
