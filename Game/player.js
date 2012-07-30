Player.prototype = new GameObject();

function Player()
{
  this.m_currentVelocity = new Vector(0,0);
  this.m_mass = 1;
	
  this.m_onGround = false;
  var m_jumping = false;
  var m_crouching = false;
  var m_gravity = 9.8;
  var m_floorHeight = 600;
  var m_worldWidth = 2000;
  var m_airDrag = 0.99;

  this.m_currentState;

  this.sprite = new Sprite("images/MonsterIdle2.png", 256, 256);

  this.m_type = ObjectType.Player;
 
  this.Update = function(dt)
  {
    if(this.m_y > m_floorHeight - this.m_height && this.m_onGround == false)
    {
      this.m_onGround = true;
      this.m_y = m_floorHeight - this.m_height;
      this.m_currentVelocity.m_dx = 0;
      this.m_currentVelocity.m_dy = 0;
    }
		
    if(this.m_x < 0)
    {
      this.m_x = 0;
      this.m_currentVelocity.m_dx *= -0.2;
      this.m_currentVelocity.m_dy *= 0.8;
    }
		
    if(this.m_x + this.m_width > m_worldWidth)
    {
      this.m_x = m_worldWidth - this.m_width;
      this.m_currentVelocity.m_dx *= -0.2;
      this.m_currentVelocity.m_dy *= 0.8;
    }

    if(this.m_onGround == false)
    {
      this.m_x += this.m_currentVelocity.m_dx;
      this.m_y += this.m_currentVelocity.m_dy;
      this.m_currentVelocity.m_dy += (m_gravity * dt);
      this.m_currentVelocity.m_dx *= m_airDrag;
    }
    /*else if(this.m_onGround == true && m_crouching == false && m_jumping == false)
    {
      ChangeState(PlayerState.PlayerIdle);
    }*/

    if(this.m_onGround == true && m_jumping == true)
    {
      this.x += this.m_currentVelocity.m_dx;
      this.y += this.m_currentVelocity.m_dy;

      m_jumping = false;
      this.m_onGround = false;
    }

    this.m_bounds.Move(this.m_x, this.m_y);
  };
	
  this.Jump = function(vX, vY)
  {
    if(this.m_onGround == true)
    {
      this.m_currentVelocity.m_dx = vX;
      this.m_currentVelocity.m_dy = vY;

      m_jumping = true;
      m_crouching = false;

      //ChangeState(PlayerState.PlayerJump);
    }
  }

  this.GetSprite = function()
  {
    return this.sprite;
  }

  return this;
};

Player.prototype.Move = function(x, y)
{
  this.m_x = x;
  this.m_y = y;

  this.m_bounds.Move(this.m_x, this.m_y);
};

Player.prototype.Draw = function(context, screenX, screenY)
{
  this.sprite.Draw(context, this.m_x, this.m_y, screenX, screenY);

  this.m_bounds.Draw(context, screenX, screenY);
}

Player.prototype.HandleCollision = function(collision)
{
  //Get bounding box of object hit.
  var _boundsOfObjHit = collision.m_objHit.GetBounds();

  //If the block is a solid block or bottom block then bounce of the side.
  if(collision.m_objHit.m_type == BlockType.SolidBlock
    || collision.m_objHit.m_type == BlockType.BottomBlock)
  {
    if(collision.top == true)
    {

    }
    else if(collision.bottom == true)
    {
      //this.m_currentVelocity.m_dx *= 0.2;
      //this.m_currentVelocity.m_dy *= -0.2;
    }
    else
    {
      if(collision.left == true)
      {
			collision.m_objHit.m_blockIntegrity -= 1;
		
		if(collision.m_objHit.m_blockIntegrity > 0)
		{
			this.Move(_boundsOfObjHit.m_left - this.m_width, this.m_y);
			this.m_currentVelocity.m_dx *= -0.2;
			this.m_currentVelocity.m_dy *= 0.2;
		}
      }

      if(collision.right == true)
      {
			collision.m_objHit.m_blockIntegrity -= 1;
		
		if(collision.m_objHit.m_blockIntegrity > 0)
		{
			this.Move(_boundsOfObjHit.m_right, this.m_y);
			this.m_currentVelocity.m_dx *= -0.2;
			this.m_currentVelocity.m_dy *= 0.2;
		}
      }
    }
  }

  //If hit top
  if(collision.m_objHit.m_type == BlockType.TopBlock)
  {
    if(collision.top == true)
    {
	  collision.m_objHit.m_blockIntegrity -= 1;
		
	  if(collision.m_objHit.m_blockIntegrity > 0)
	  {
        this.Move(this.m_x, _boundsOfObjHit.m_top  - this.m_height);
        this.m_currentVelocity.m_dx = 0;
        this.m_currentVelocity.m_dy = 0;

        this.m_onGround = true;
	  }
    }
    else if(collision.bottom == true)
    {
      //this.m_currentVelocity.m_x *= 0.8;
      //this.m_currentVelocity.m_y *= -0.2;
    }
    else
    {
      if(collision.left == true)
      {
			collision.m_objHit.m_blockIntegrity -= 1;
		
		if(collision.m_objHit.m_blockIntegrity > 0)
		{
			this.Move(_boundsOfObjHit.m_left - this.m_width, this.m_y);
			this.m_currentVelocity.m_dx *= -0.2;
			this.m_currentVelocity.m_dy *= 0.2;
		}
      }	

      if(collision.right == true)
      {
			collision.m_objHit.m_blockIntegrity -= 1;
		
		if(collision.m_objHit.m_blockIntegrity > 0)
		{
			this.Move(_boundsOfObjHit.m_right, this.m_y);
			this.m_currentVelocity.m_dx *= -0.2;
			this.m_currentVelocity.m_dy *= 0.2;
		}
      }
    }
  }
	
/*if(collision.m_objHit.m_type == BlockType.GrabBlock)
{
if(collision.left == true)
{
this.Move(_boundsOfObjHit.m_left - this.m_width, this.y);
this.m_currentVelocity.m_dx = 0.0;
this.m_currentVelocity.m_dy = 0.0;
this.m_onGround = true;
}

if(collision.right == true)
{
this.Move(_boundsOfObjHit.m_right, this.y);
this.m_currentVelocity.m_dx = 0.0;
this.m_currentVelocity.m_dy = 0.0;
this.m_onGround = true;
}
}

if(collision.m_objHit.m_type == ObjectType.Objective)
{
this.Move(50, 500);
this.m_onGround = false;
this.m_currentVelocity.m_dx = 0.0;
this.m_currentVelocity.m_dy = 0.0;
}*/
};

Player.prototype.UpdatePhysics = function()
{
  for(i = 0; i < this.m_collisions.length; i++)
  {
    this.HandleCollision(this.m_collisions[i]);
  }

  this.m_collisions = [];
};
