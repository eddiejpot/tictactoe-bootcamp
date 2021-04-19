/* -------- GAME LOGIC -------- */

// switch the global values from one player to the next
// A.K.A Change players every turn
const togglePlayer = () => {
  if (currentPlayer === PLAYER_ONE) {
    currentPlayer = PLAYER_TWO;
  } else {
    currentPlayer = PLAYER_ONE;
  }
};

// Put either X or O on the board
const squareClick = (column, row) => {
  console.log('coordinates', column, row);

  // see if the clicked square has been clicked on before
  if (board[column][row] === '') {
    // alter the data array, set it to the current player
    board[column][row] = currentPlayer;

    // refresh the screen with a new board
    // according to the array that was just changed
    buildBoard(board);

    // check if win
    checkWinner(board);

    // change the player
    togglePlayer();
  }
};
