/* -------- HELPER FUNCTIONS -------- */

// completely rebuilds the entire board every time there's a click
const buildBoard = (arrBoard) => {
  // start with an empty container
  boardContainer.innerHTML = '';
  boardElement = document.createElement('div');
  boardElement.classList.add('board');

  // move through the board data array and create the
  // current state of the board
  for (let i = 0; i < arrBoard.length; i += 1) {
    // separate var for one row / row element
    const row = arrBoard[i];
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    // set each square
    // j is the column number
    for (let j = 0; j < row.length; j += 1) {
      // one square element
      const square = document.createElement('div');
      square.classList.add('square');

      // set the text of the square according to the array
      square.innerText = arrBoard[i][j];

      rowElement.appendChild(square);

      // set the click all over again
      // eslint-disable-next-line
      square.addEventListener('click', () => {
        squareClick(i, j);
      });
    }

    // add a single row to the board
    boardContainer.appendChild(rowElement);
  }
};

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
  const diagonalArray = arr.map((value, index) => value[index]);
  // console.log(diagonalArray);
  filterValues(diagonalArray);
  const flipArray = arr
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
