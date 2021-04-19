/* -------- GAME INIT -------- */

const initGame = () => {
  // create the board container element and put it on the screen
  boardContainer = document.createElement('div');
  document.body.appendChild(boardContainer);

  // build the board - right now it's empty
  // var board is a global
  buildBoard(board);
};

initGame();
