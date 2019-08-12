const uuidv1 = require('uuid/v1');
let gs;
let ctx;
let canvas;

let init = (_canvas, gameState) => {
  canvas = _canvas;
  ctx = canvas.getContext('2d')
  gs = gameState;

  addProp({
    name: 'player',
    grow: false,
    segments: [{ x: 20, y: 20, fill: "blue" }],
    update: function(gs) {
      let head = { ...this.segments[0] };

      switch(gs.dir)
      {
        case 'l':
          head.x -= gs.blockSize
          break;
        case 'u':
          head.y -= gs.blockSize
          break;
        case 'r':
          head.x += gs.blockSize
          break;
        case 'd':
          head.y += gs.blockSize
          break;
        default:
          break;
      }

      // Collision
      let hitSeg = this.segments.filter((seg) => seg.x === head.x && seg.y === head.y);
      if(hitSeg.length)
      {
        this.segments.forEach((seg) => {
          if(seg.x === head.x && seg.y === head.y)
          {
            seg.fill = "red"
          }
        })
        gs.fail = true;
        return;
      }
      if(head.x < 0 || head.x + gs.blockSize > canvas.width || 
         head.y < 0 || head.y + gs.blockSize > canvas.height)
      {
        this.segments[0].fill = "red"
        gs.fail = true;
        return;
      }

      for(let i=0; i<gs.props.length; i++)
      {
        let prop = gs.props[i];
        if(prop.name === 'food' && head.x === prop.x && head.y === prop.y)
        {
          gs.props.splice(i, 1);
          this.grow = true;
          break;
        }
      }

      if(this.grow)
      {
        this.grow = false;
        gs.score.update();
      }
      else
      {
        this.segments.pop();
      }

      this.segments.unshift(head);
    }
  });
}

let update = (delta) => {
  if(!gs.props.filter((prop) => prop.name === 'food').length)
  {
    let x = (Math.random() * canvas.width) / gs.blockSize;
    x = Math.floor(x) * gs.blockSize;
    let y = (Math.random() * canvas.height) / gs.blockSize;
    y = Math.floor(y) * gs.blockSize;
    addProp({
      name: 'food',
      x: x,
      y: y,
      fill: "green",
    });
  }

  gs.props.forEach((prop) => {
    if(prop.update !== undefined)
    {
      prop.update(gs);
    }
    draw(prop);
  });

  return gs;
}

function addProp(prop)
{
  gs.props.push({id: uuidv1(), ...prop})
}

function draw({x, y, fill, segments})
{
  if(segments !== undefined)
  {
    segments.forEach((seg) => {
      ctx.fillStyle = seg.fill;
      ctx.fillRect(seg.x + 1, seg.y + 1, gs.blockSize - 2, gs.blockSize - 2);
    })
  }
  else
  {
    ctx.fillStyle = fill;
    ctx.fillRect(x + 1, y + 1, gs.blockSize - 2, gs.blockSize - 2);
  }
}

export {
    init, 
    update,
};
