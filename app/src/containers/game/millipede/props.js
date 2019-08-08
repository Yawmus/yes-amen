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

export const millipede = {
  name: 'millipede',
  size: 20,
  speed: 1,
  dir: 'r',
  globalDir: 'd',
  yDist: 0,
  draw: function(ctx)
  {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(this.x+this.size/2,this.y+this.size/2,this.size/2,0,2*Math.PI);
    ctx.fill();
  },
  hit: function(gs)
  {
      gs.deleteQueue.push(this.id);
  },
  update: function(gs, canvas) {
    let oldX = this.x;
    let oldY = this.y;
    let changed = false;

    let modX = 0;
    let modY = 0;
    switch(this.dir)
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
    }

    this.x += modX * this.speed;
    this.y += modY * this.speed;

    //if(['d', 'u'].includes(this.dir) && this.y >= yStep)
    //{
      //this.y
    //}

    let collided = gs.props.filter((prop) => {
      if(prop.name != 'bullet'
        && this.x + this.size > prop.x
        && this.x < prop.x + prop.size
        && this.y < prop.y + prop.size
        && this.y + this.size > prop.y)
      {
        if(prop.name == 'mushroom'){
          if(['l', 'r'].includes(this.dir))
          {
            changed = true;
            this.dir = this.globalDir;
          }
        }
        else if(prop.name == 'player')
        {
          prop.hit(gs);
        }
        return true;
      }
      else
      {
        return false;
      }
    })

    if(collided.length)
    {
      //gs.deleteQueue.push(this.id);
    }
    // Collision
    if(this.x < 0 || this.x + this.size > canvas.width || 
      this.y < 0 || this.y + this.size > canvas.height)
    {
      this.x = this.oldX;
      this.y = this.oldY;
      return;
    }
    if(!changed)
    {
    }
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
    let collided = gs.props.filter((prop) => {
      if(prop.name != 'bullet' && prop.name != 'player'
        && this.x + this.size > prop.x
        && this.x < prop.x + prop.size
        && this.y < prop.y + prop.size
        && this.y + this.size > prop.y)
      {
        prop.hit(gs);
        return true;
      }
      else
      {
        return false;
      }
    })
    if(this.y < 0 || collided.length)
    {
      gs.deleteQueue.push(this.id);
    }
  }
}

