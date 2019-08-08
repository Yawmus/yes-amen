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

  let millipede = props['millipede'];
  spawnProp(millipede, 0, 0);
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

function spawnProp(prop, x, y)
{
  const newProp = Object.assign(
    {
      id: uuidv1(),
      x: x,
      y: y
    },
    prop
  )

  gs.props.push(newProp);
}

function draw({name, x, y, fill, size, segments, draw})
{
  if(draw !== undefined)
  {
    draw(ctx);
  }
  if(segments !== undefined)
  {
    segments.forEach((seg) => {
      ctx.fillStyle = seg.fill;
      ctx.fillRect(seg.x + 1, seg.y + 1, size - 2, size - 2);
    })
  }
  else
  {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(x + size / 2, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x + size / 2 , y + size / 2);
    ctx.lineTo(x + size, y + size);
    ctx.fill();
  }
}

export {
  init, 
  update,
  spawnProp
};
