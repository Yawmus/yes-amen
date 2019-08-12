import { spawnProp } from './logic';

export const player = {
  name: 'player',
  size: 20,
  life: 4,
  draw: function(ctx)
  {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(this.x + this.size / 2, this.y);
    ctx.lineTo(this.x, this.y + this.size);
    ctx.lineTo(this.x + this.size / 2 , this.y + this.size / 2);
    ctx.lineTo(this.x + this.size, this.y + this.size);
    ctx.lineTo(this.x + this.size / 2, this.y);
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
  },
  update: function(gs, canvas) {
    // Collision
    if(this.x < 0 || this.x + this.size > canvas.width || 
      this.y < 0 || this.y + this.size > canvas.height)
    {
      this.x = this.oldX;
      this.y = this.oldY;
      return;
    }
      this.x = this.dx;
      this.y = this.dy;
  },
  hit: function(gs){
    if(--this.life <= 0)
    {
      gs.fail = true;
    }
  }
}

var Prop = function(x, y, name) {
  if(this.constructor === Prop)
  {
    throw new Error("Can't instantiate abstract class")
  }
  this.x = x;
  this.y = y;
  this.name = name;
}

var Creature = function( x, y, name, canHit )
{
  Prop.call(this, x, y, name );
  this.canHit = canHit;
}

Creature.prototype = Object.create(Prop.prototype)
Creature.prototype.constructor = Creature

Creature.prototype.speed = 1;
Creature.prototype.size = 20;
Creature.prototype.getCollisions = function(gs){
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

export var Millipede = function( x, y)
{
  Creature.call(this, x, y, 'millipede', [ 'player', 'mushroom' ]);
  this.moveAxis = 'x';
  this.xGlobalDir = 'r';
  this.yGlobalDir = 'd';
  this.segments = [];
}

Millipede.prototype = Object.create(Creature.prototype)
Millipede.prototype.constructor = Millipede

Millipede.prototype.draw = function(ctx)
{
  ctx.fillStyle = "#00AA00";
  ctx.beginPath();
  ctx.arc(this.x+this.size/2,this.y+this.size/2,this.size/2,0,2*Math.PI);
  ctx.fill();
}

Millipede.prototype.hit = function(gs)
{
  // Normalize coords to grid
  let x = (this.x / this.size).toFixed() * this.size;
  let y = (this.y / this.size).toFixed() * this.size;
  spawnProp(mushroom, x, y)
  gs.deleteQueue.push(this.id);
}

Millipede.prototype.update = function(gs, canvas) {
  let oldX = this.x;
  let oldY = this.y;
  const dir = this.moveAxis === 'x' ? this.xGlobalDir : this.yGlobalDir;

  let modX = 0;
  let modY = 0;
  switch(dir)
  {
    case 'l':
      modX = -1;
      break;
    case 'r':
      modX = 1;
      break;
    case 'u':
      modY = -1;
      break;
    case 'd':
      modY = 1;
      break;
    default:
      break;
  }

  this.x += modX * this.speed;
  this.y += modY * this.speed;

  if(dir === this.yGlobalDir)
  {
    let movedYOneUnit = Number.isInteger(this.y / this.size);
    if(movedYOneUnit)
    {
      this.moveAxis = 'x';
    }
  }

  let collided = this.getCollisions(gs);
  collided.forEach((prop) => {
    if(prop.name === 'mushroom'){
      if(dir === this.xGlobalDir)
      {
        this.moveAxis = this.moveAxis === 'x' ? 'y' : 'x';
        this.xGlobalDir = this.xGlobalDir === 'r' ? 'l' : 'r';
      }
    }
    else if(prop.name === 'player')
    {
      prop.hit(gs);
    }
  })

  // Bounds check
  if(this.y < 0 || this.y + this.size > canvas.height)
  {
    this.moveAxis = 'x';
    this.yGlobalDir = this.yGlobalDir === 'u' ? 'd' : 'u';
    this.y = oldY;
  }
  if(this.x < 0 || this.x + this.size > canvas.width)
  {
    this.moveAxis = 'y';
    this.xGlobalDir = this.xGlobalDir === 'r' ? 'l' : 'r';
    this.x = oldX;
  }
}


export const mushroom = {
  name: 'mushroom',
  size: 20,
  fill: [
    "#FF0000",
    "#DD0000",
    "#AA0000",
    "blue",
  ],
  life: 4,
  draw: function(ctx)
  {
    ctx.fillStyle = this.fill[this.life-1];
    ctx.fillRect(this.x, this.y, this.size, this.size);
  },
  hit: function(gs)
  {
    if(--this.life <= 0)
    {
      gs.deleteQueue.push(this.id);
    }
  }
}

export const bullet = {
  name: 'bullet',
  speed: 6,
  size: 6,
  canHit: [
    'millipede',
    'mushroom'
  ],
  draw: function(ctx)
  {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.x+this.size/2,this.y,this.size/2,0,2*Math.PI);
    ctx.fill();
  },
  update: function(gs, canvas)
  {
    this.y -= this.speed;

    // this hitting something else
    // there's an abstraction to be made with collisions
    // list of names it can hit
    let collided = this.getCollisions(gs);
    collided.forEach((prop) => {
      prop.hit(gs);
    })

    if(this.y < 0 || collided.length)
    {
      gs.deleteQueue.push(this.id);
    }
  }
}

