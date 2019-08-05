exports.setup = (_this) => {
  _this.canvas.addEventListener( "keydown", keyDown.bind(_this), true);


}


function keyDown(e) {
  if(e.keyCode === 37) // left
  {
    this.gameState.dir = 'l';
  }
  if(e.keyCode === 38) // up
  {
    this.gameState.dir = 'u';
  }
  if(e.keyCode === 39) // right
  {
    this.gameState.dir = 'r';
  }
  if(e.keyCode === 40) // down
  {
    this.gameState.dir = 'd';
  }
  e.preventDefault();
}

