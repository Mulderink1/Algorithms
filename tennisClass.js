class tennis {
  constructor() {
    this.playerArr = [0, 0];
  }
  playerScored(currPlayer) {
    let player = currPlayer;
    let otherPlayer = null;
    player === 1 ? player = 0 : player = 1;
    player === 0 ? otherPlayer = 1 : otherPlayer = 0;
    if (this.playerArr[player] === 'adv' && this.playerArr[otherPlayer] !== 'adv' || this.playerArr[player] === 40 && this.playerArr[otherPlayer] <= 30) return `Player ${currPlayer} wins.`;
    if (this.playerArr[player] === 40 && this.playerArr[otherPlayer] === 'adv') {
      this.playerArr[player] = 'adv';
      this.playerArr[otherPlayer] = 40;
    };
    if (this.playerArr[player] === 40 && this.playerArr[otherPlayer] === 40) this.playerArr[player] = 'adv';
    if (this.playerArr[player] === 30) this.playerArr[player] = 40;
    if (this.playerArr[player] === 15) this.playerArr[player] = 30;
    if (this.playerArr[player] === 0) this.playerArr[player] = 15;
    return `${this.playerArr[0]}-${this.playerArr[1]}`;
  };
};

const game = new tennis;
console.log(game.playerScored(1));
console.log(game.playerScored(2));
console.log(game.playerScored(1));
console.log(game.playerScored(1));
console.log(game.playerScored(2));
console.log(game.playerScored(2));
console.log(game.playerScored(1));
console.log(game.playerScored(2));
console.log(game.playerScored(1));
console.log(game.playerScored(2));
console.log(game.playerScored(2));
