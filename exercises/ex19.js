/*
In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

! Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, 
a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen
In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). 
For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents 
a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:
- chess board example
- Would be represented in JavaScript like this:

` [
`   [0, 0, 0, 0, 0, 1, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [1, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0]
` ]
* Our first challenge will be to write a function that generates a chess board like this. 
* We will then write a function to detect weather or not the two queens are positioned so that they attack each other.


> Input
` let whiteQueen = [0, 5];
` let blackQueen = [5, 0];
` let generatedBoard = generateBoard(whiteQueen, blackQueen);
` console.log(generatedBoard);
` console.log(queenThreat(generatedBoard));
> Expected Output
` [
`   [0, 0, 0, 0, 0, 1, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [1, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0]
` ]
` true

> Input
` let whiteQueen = [0, 0];
` let blackQueen = [5, 7];
` let generatedBoard = generateBoard(whiteQueen, blackQueen);
` console.log(generatedBoard);
` console.log(queenThreat(generatedBoard));
> Expected Output
` [
`   [1, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 1],
`   [0, 0, 0, 0, 0, 0, 0, 0],
`   [0, 0, 0, 0, 0, 0, 0, 0]
` ]
` false

? Instruction
- Create a function generateBoard which will return a nested array representing the board, 
  containing the location of two queens.
- Create a function called queenThreat that will indicate whether or not the two queens are positioned 
  so that they attack each other.
*/

const generateBoard = (whiteQueen, blackQueen) => {
  // const size = 8;
  // let board = [];
  // let row = [];
  // for (let i = 0; i < size; i++) {
  //   row = []
  //   for (let j = 0; j < size; j++)
  //     row.push(0);
  //   board.push(row);
  // }
  // board[whiteQueen[0]][whiteQueen[1]] = 1;
  // board[blackQueen[0]][blackQueen[1]] = 1;

  // -------------
  // let board = Array(8).fill(Array(8).fill(0)); 
  let board = Array(8).fill(0).map(() => Array(8).fill(0));
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  // -------------
  return board;
}

const queenThreat = (board) => {
  let queens = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++)
      if (board[i][j] === 1)
        queens.push([i, j]);
  }
  const [q1, q2] = queens;
  // row / column
  if (q1[0] === q2[0] || q1[1] === q2[1]) return true;
  // diagonal
  if (Math.abs(q1[0] - q2[0]) === Math.abs(q1[1] - q2[1])) return true;

  return false;
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];

// console.log(generateBoard(0,0));
console.table(generateBoard(whiteQueen, blackQueen));


module.exports = { generateBoard, queenThreat };