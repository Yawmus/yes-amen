const uuidv1 = require('uuid/v1');
const props = require('./props');
let gs;
let ctx;
let canvas;

let init = (_canvas, gameState) => {
  canvas = _canvas;
  ctx = canvas.getContext('2d')
  gs = gameState;

  let player = props['player'];
  let x = Math.floor(canvas.width / 2) + 10
  let y = canvas.height - 50
  spawnProp(player, x, y);

  let mushroom = props['mushroom'];
  let xSteps = canvas.width / mushroom.size;
  let ySteps = (canvas.height - gs.boundHeight) / mushroom.size;

  for(let j=0; j<ySteps; j++)
  {
    for(let i=0; i<xSteps; i++)
    {
      if(Math.random() > .9 - j*.01)
      {
        x = i * mushroom.size;
        y = j * mushroom.size;
        spawnProp(mushroom, x, y);
      }
    }
  }

  let millipede = new props['Millipede'](0, 0);
  spawnProp(millipede, 0, 0, true);
}

let update = (delta) => {
  gs.props.forEach((prop) => {
    if(prop.update !== undefined)
    {
      prop.update(gs, canvas);
    }
    prop.draw(ctx);
  });

  return gs;
}

function spawnProp(prop, x, y, test = false)
{
  if(test)
  {
    gs.props.push(prop);
    return
  }

  let baseProp = {
      id: uuidv1(),
      x: x,
      y: y
  }

  if(prop.canHit !== undefined)
  {
    baseProp.getCollisions = function(gs)
    {
      return gs.props.filter((prop) => {
        if(this.canHit.includes(prop.name) && prop.id !== this.id
        && this.x + this.size > prop.x
        && this.x < prop.x + prop.size
        && this.y < prop.y + prop.size
        && this.y + this.size > prop.y) {
          return true;
        }
        else
        {
          return false;
        }
      })
    }
  }

  const newProp = Object.assign(
    baseProp,
    prop
  )

  gs.props.push(newProp);
}

export {
  init, 
  update,
  spawnProp
};
