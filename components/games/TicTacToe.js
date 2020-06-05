import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const INIT_HISTORY = [{squares: Array(9).fill(null)}];

export default function TicTacToe() {

  const [ history, setHistory ] = useState(INIT_HISTORY);
  const [ stepNumber, setStepNumber ] = useState(0);
  const [ xIsNext, setXIsNext ] = useState(true);

  const current = history[stepNumber];

  const handlePress = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setHistory(historyCopy.concat([{ squares }]));
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.game}>
        <Board squares={current.squares} onPress={handlePress} />
        <GameInfo history={history} stepNumber={stepNumber} xIsNext={xIsNext} jumpTo={jumpTo} />
      </View>
    </View>
  )
}

function Board({ squares, onPress }) {
  const renderSquare = (i) => (
    <Square value={squares[i]} onPress={() => onPress(i)} />
  );

  return (
    <View style={styles.board}>
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  )
}

function Square({ onPress, value }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.square}>
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}

function GameInfo({ history, stepNumber, xIsNext, jumpTo }) {
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
     const desc = move ?
       'Go to move #' + move :
       'Go to game start';

     return (
       <View key={move}>
        <TouchableOpacity style={styles.move} onPress={() => jumpTo(move)}>
          <Text>{desc}</Text>
        </TouchableOpacity>
       </View>
     );
   });

   let status;

   if (winner) {
     status = "Winner: " + winner;
   } else {
     status = "Next player: " + (xIsNext ? "X" : "O");
   }

  return (
    <View style={styles.gameInfo}>
      <View style={styles.moves}>{moves}</View>
    </View>
  )
}

function Leaderboard() {
  return (
    <View style={styles.leaderboard}>
    </View>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boardRow: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  game: {
    flexDirection: 'row',
  },
  gameInfo: {
    backgroundColor: '#fff',
    marginLeft: 20
  },
  leaderboard: {

  },
  move: {
  },
  moves: {
    padding: 10,
    backgroundColor: '#f7f8f9',
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#f7f8f9'
  }
})
