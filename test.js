const PLAYER_ONE = 'X';
const PLAYER_TWO = 'O';
let playerOneWin = false;
let playerTwoWin = false;

const board = [
  ['X', 'X', 'X'],
  ['O', 'X', 'O'],
  ['O', 'X', 'O'],
];

// helper function that takes in and array and removes repeated values
const filterValues = (arr) => {
  // e.g. if the array is ['X','X','O'], it will return ['X','O']
  // e.g. if the array is ['X','X','X'], it will return ['X']
  let checkPlayer = arr.filter((item, index) => arr.indexOf(item) === index);
  if (checkPlayer.length === 1 && checkPlayer[0] === PLAYER_ONE) {
    playerOneWin = true;
  } else if (checkPlayer.length === 1 && checkPlayer[0] === PLAYER_TWO) {
    playerTwoWin = true;
  }
};

// reset game
const resetGame = () => {
  WIN_RESULT = '';
  playerOneWin = false;
  playerTwoWin = false;
};

// check horizontal
const checkHorizontal = (arr) => {
  for (c = 0; c < arr.length; c += 1) {
    //column loop
    let rowNum = c;
    let rowArray = arr[c];
    // check horizontal
    filterValues(rowArray);
  }
};

// check vertical
const checkVertical = (arr) => {
  // take out the first value of each array and make a new array
  // [['a', 'b', 'c'],
  //  ['d', 'e', 'f'],
  //  ['g', 'h', 'i'],]
  // returns
  // [['a', 'd', 'g'],['b', 'e', 'h'],['c', 'f', 'i']]
  for (i = 0; i < arr.length; i += 1) {
    // on the first loop
    //  verticalArray = ['a', 'd', 'g']
    let verticalArray = arr.map((value) => value[i]);
    filterValues(verticalArray);
  }
};

// check diagonal
const checkDiagonal = (arr) => {
  // [['a', 'b', 'c'],
  //  ['d', 'e', 'f'],
  //  ['g', 'h', 'i'],]
  // returns
  // ['a', 'e', 'i']
  let diagonalArray = arr.map((value, index) => value[index]);
  // console.log(diagonalArray);
  filterValues(diagonalArray);
  let flipArray = arr
    // [['a', 'b', 'c'],
    //  ['d', 'e', 'f'],
    //  ['g', 'h', 'i'],]
    // returns
    // [['c', 'b', 'a'],['f', 'e', 'd'], ['i', 'h', 'g']]
    .map((value) => value.reverse())
    .map((value, index) => value[index]);
  filterValues(flipArray);
};

const checkWinner = () => {
  checkHorizontal(board);
  checkVertical(board);
  checkDiagonal(board);
  if (playerOneWin === true) {
    console.log('PLAYER ONE WINS');
  } else if (playerTwoWin === true) {
    console.log('PLAYER TWO WINS');
  }
  resetGame();
};

checkWinner();
