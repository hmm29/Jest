import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {
  useHeaderHeight,
} from '@react-navigation/stack';

import Layout from '../../../constants/Layout';

const screenWidth = Layout.window.width;

const INIT_HISTORY = [{squares: Array(9).fill(null)}];

export default function TicTacToe({ navigation }) {

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
      <View style={styles.game}>
        <Header navigation={navigation} />
        <Board squares={current.squares} onPress={handlePress} />
        <GameInfo history={history} stepNumber={stepNumber} xIsNext={xIsNext} jumpTo={jumpTo} />
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

function PlayerThumbnail({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={styles.playerThumbnailWrapper}>
        <Image style={styles.playerThumbnail} source={ { uri: 'https://placeimg.com/140/140/people' }} />
      </View>
      <View
          style={styles.playerThumbnailSignBadge}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            a
          </Text>
        </View>
    <Text style={{marginTop: 10}}>3 Wins</Text>
    </View>
    </TouchableOpacity>
  )
}

function Header({ navigation }) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: useHeaderHeight() / 2, alignItems: 'center', position: 'absolute', top: 0, width: '100%'}} >
      <PlayerThumbnail onPress={() => navigation.navigate('MatchProfile')} />
      <PlayerThumbnail onPress={() => navigation.navigate('MatchProfile')} />
    </View>
  )
}

function Square({ onPress, value }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.square}>
      <Text style={styles.squareText}>{value}</Text>
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
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    alignSelf: 'center'
  },
  boardRow: {
    flexDirection: 'row',
  },
  game: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  gameInfo: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  leaderboard: {

  },
  move: {
  },
  moves: {
    padding: 10,
    backgroundColor: '#f7f8f9',
  },
  playerThumbnail: {
    backgroundColor: 'dodgerblue',
    width: screenWidth / 10,
    height: screenWidth / 10,
    borderRadius: 50,
  },
  playerThumbnailSignBadge: {
    position: 'absolute',
    width: screenWidth / 15,
    height: screenWidth / 15,
    borderRadius: screenWidth / 30,
    borderWidth: 3,
    borderColor: '#fff',
    top: 0,
    right: -screenWidth / 60,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerThumbnailWrapper: {
    backgroundColor: '#fff',
    width: screenWidth / 8,
    height: screenWidth / 8,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#f7f8f9',
  },
  squareText: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
