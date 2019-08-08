const props = require('./props');
const { spawnProp } = require('./logic');

exports.setup = (_this) => {
  _this.canvas.addEventListener( "keydown", keyDown.bind(_this), true);
  _this.canvas.addEventListener( "mousemove", mouseMove.bind(_this), true);
  _this.canvas.addEventListener( "mousedown", mouseDown.bind(_this), true);
  fire = fire.bind(_this);
}

function fire(){
  let player = this.gameState.props.filter(prop => prop.name == "player")[0]
  if(player === undefined)
  {
    return;
  }

  let bullet = props['bullet'];
  let x = player.x + player.size/2 - 3;
  let y = player.y + player.size/2;

  spawnProp(bullet, x, y)
}

function mouseDown(e)
{
  fire();
}

function mouseMove(e)
{
  var rect = this.canvas.getBoundingClientRect();
  let player = this.gameState.props.filter(prop => prop.name == "player")[0]
  if(player === undefined)
  {
    return;
  }

  let x = e.clientX - rect.left
  let y = e.clientY - rect.top

  if(x < 0){
    x = 0;
  }
  if(y < this.canvas.height - this.gameState.boundHeight + player.size/2)
  {
    y = this.canvas.height - this.gameState.boundHeight + player.size/2;
  }

  player.dx = x - (player.size/2) - 2;
  player.dy = y - (player.size/2) - 2;
}

function keyDown(e) {
  let player = this.gameState.props.filter(prop => prop.name == "player")[0]

  if(player === undefined)
  {
    return;
  }

  if(e.keyCode === 32) // fire
  {
    fire();
  }
  if(e.keyCode === 37) // left
  {
    player.dx -= player.speed
  }
  if(e.keyCode === 38) // up
  {
    player.dy -= player.speed
  }
  if(e.keyCode === 39) // right
  {
    player.dx += player.speed
  }
  if(e.keyCode === 40) // down
  {
    player.dy += player.speed
  }

  e.preventDefault();
}

