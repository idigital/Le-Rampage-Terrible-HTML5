Player.prototype = new GameObject();

function Player(damage, scoreHandler)
{
  this.m_currentVelocity = new Vector(0,0);
  this.m_mass = 5;
  this.m_currentPowerX = 0;
  this.m_currentPowerY = 0;
	
  this.m_onGround = false;
  var m_jumping = false;
  var m_crouching = false;
  var m_gravity = 9.8;
  var m_floorHeight = 600;
  var m_worldWidth = 2000;
  var m_airDrag = 1.0;

  this.m_currentState;
  
  this.m_damage = damage;
  this.m_scoreHandler = scoreHandler;

  this.animations = new AnimatedSprite("images/player_anim.png", null, 103, 128, 3);
  //new Sprite("images/player_anim.png", 103, 128);

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
	  
	  this.m_currentPowerX = Math.floor(vX / 3);
	  if(this.m_currentPowerX < 0)
	  {
	    this.m_currentPowerX *= -1;
	  }
	  this.m_currentPowerY = Math.floor(vY / 4);
	  if(this.m_currentPowerY < 0)
	  {
	    this.m_currentPowerY *= -1;
	  }

      m_jumping = true;
      m_crouching = false;

      //ChangeState(PlayerState.PlayerJump);
    }
  }

  return this;
};

Player.prototype.Move = function(x, y)
{
  this.m_x = x;
  this.m_y = y;

  this.m_bounds.Move(this.m_x, this.m_y);
};

Player.prototype.Draw = function(context, screenX, screenY, scale)
{
  //this.animations.DrawFrame(context, 0, this.m_x, this.m_y, screenX, screenY, scale);
  this.animations.Draw(context, this.m_x, this.m_y, screenX, screenY, scale);

  this.m_bounds.Draw(context, screenX, screenY, scale);
  
  context.fillStyle = "Black";
  context.fillText("PowerX: " + this.m_currentPowerX, 510, 50);
  context.fillText("PowerY: " + this.m_currentPowerY, 510, 70);
}

Player.prototype.HandleCollision = function(collision)
{
  //Get bounding box of object hit.
  var _boundsOfObjHit = collision.m_objHit.GetBounds();

  //********************
  //Check if hit a wall.
  //********************
  if(collision.m_objHit.m_type == ObjectType.Wall)
  {
    var _sectionsHit;

    //Determine which side of the wall is hit and from which direction.
    //If the force of impact is strong enough, destroy the wall and play
    //the corresponding damage animation. If not then player bounces off.
    if(collision.left == true && this.m_currentVelocity.m_dx >= 0)
    {
      //Get sections hit by player.
      _sectionsHit = collision.m_objHit.DetermineSectionsHit(this.m_bounds);

      //Iterate through sections hit to find out how many are hit and hence which damage animation to play.
      _numSectionsHit = 0;
      for(section = 0; section < _sectionsHit.length; section++)
      {
        if(_sectionsHit[section] == true)
        {
          _numSectionsHit++;
        }
      }

      //Depending on number of sections hit. React and cause damage.
      if(_numSectionsHit == 0)
      {
        //Ignore.
      }
      else if(_numSectionsHit == 1)
      {
        //Find which section hit and play one third wall damage animation.
        var _section;
        if(_sectionsHit[0] == true)
        {
          _section = 0;
        }
        else if(_sectionsHit[1] == true)
        {
          _section = 1;
        }
        else if(_sectionsHit[2] == true)
        {
          _section = 2;
        }
        var _y = collision.m_objHit.m_y + ((WallSection.WALL_HEIGHT / WallSection.SECTIONS) * _section);
        this.m_damage.CreateWallDamageAnimation(
                                        DamageHorizontalDirection.RIGHT, 1,
                                        collision.m_objHit.m_x,
                                        _y);

        this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
      }
      else if (_numSectionsHit == 2)
      {
        //Find which two sections hit and play two thirds wall damage animation.
        var _section;
        if(_sectionsHit[0] == true)
        {
          _section = 0;
        }
        else if(_sectionsHit[1] == true)
        {
          _section = 1;
        }
        var _y = collision.m_objHit.m_y + ((WallSection.WALL_HEIGHT / WallSection.SECTIONS) * _section);
        this.m_damage.CreateWallDamageAnimation(
                                        DamageHorizontalDirection.RIGHT, 2,
                                        collision.m_objHit.m_x,
                                        _y);

         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
    }
      else if (_numSectionsHit == 3)
      {
        //Play whole wall damage animation.
        this.m_damage.CreateWallDamageAnimation(
                                        DamageHorizontalDirection.RIGHT, 3,
                                        collision.m_objHit.m_x,
                                        collision.m_objHit.m_y);

         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
   }

      /*if(this.m_currentPowerX >= collision.m_objHit.m_blockIntegrity
         && collision.m_objHit.m_blockIntegrity > 0)
      {
        this.m_currentPowerX -= collision.m_objHit.m_blockIntegrity;
        collision.m_objHit.m_blockIntegrity = 0;
        this.m_damage.CreateWallDamageAnimation(DamageHorizontalDirection.RIGHT, 3, collision.m_objHit.m_x, collision.m_objHit.m_y);
      }

      if(collision.m_objHit.m_blockIntegrity > 0)
      {
        this.Move(_boundsOfObjHit.m_left - this.m_width, this.m_y);
        this.m_currentVelocity.m_dx *= -0.2;
        this.m_currentVelocity.m_dy *= 0.2;
      }*/
    }

    if(collision.right == true && this.m_currentVelocity.m_dx < 0)
    {
      //Get sections hit by player.
      _sectionsHit = collision.m_objHit.DetermineSectionsHit(this.m_bounds);

      //Iterate through sections hit to find out how many are hit and hence which damage animation to play.
      _numSectionsHit = 0;
      for(section = 0; section < _sectionsHit.length; section++)
      {
        if(_sectionsHit[section] == true)
        {
          _numSectionsHit++;
        }
      }

      //Depending on number of sections hit. React and cause damage.
      if(_numSectionsHit == 0)
      {
        //Ignore.
      }
      else if(_numSectionsHit == 1)
      {
        //Find which section hit and play one third wall damage animation.
        var _section;
        if(_sectionsHit[0] == true)
        {
          _section = 0;
        }
        else if(_sectionsHit[1] == true)
        {
          _section = 1;
        }
        else if(_sectionsHit[2] == true)
        {
          _section = 2;
        }
        var _y = collision.m_objHit.m_y + ((WallSection.WALL_HEIGHT / WallSection.SECTIONS) * _section);
        this.m_damage.CreateWallDamageAnimation(
                                        DamageHorizontalDirection.LEFT, 1,
                                        collision.m_objHit.m_x - 64,
                                        _y);

         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
     }
      else if (_numSectionsHit == 2)
      {
        //Find which two sections hit and play two thirds wall damage animation.
        var _section;
        if(_sectionsHit[0] == true)
        {
          _section = 0;
        }
        else if(_sectionsHit[1] == true)
        {
          _section = 1;
        }
        var _y = collision.m_objHit.m_y + ((WallSection.WALL_HEIGHT / WallSection.SECTIONS) * _section);
        this.m_damage.CreateWallDamageAnimation(
                                        DamageHorizontalDirection.LEFT, 2,
                                        collision.m_objHit.m_x - 64,
                                        _y);

         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
    }
      else if (_numSectionsHit == 3)
      {
        //Play whole wall damage animation.
        this.m_damage.CreateWallDamageAnimation(
                                        DamageHorizontalDirection.LEFT, 3,
                                        collision.m_objHit.m_x - 256,
                                        collision.m_objHit.m_y);

         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
         this.m_scoreHandler.AddChainLink(ScoreObjectType.WALL,
                                         ScoreHandler.WALL_SECTION_POINTS);
   }

      /*if(this.m_currentPowerX >= collision.m_objHit.m_blockIntegrity
         && collision.m_objHit.m_blockIntegrity > 0)
      {
        this.m_currentPowerX -= collision.m_objHit.m_blockIntegrity;
        collision.m_objHit.m_blockIntegrity = 0;
        this.m_damage.CreateWallDamageAnimation(DamageHorizontalDirection.RIGHT, 3, collision.m_objHit.m_x, collision.m_objHit.m_y);
      }

      if(collision.m_objHit.m_blockIntegrity > 0)
      {
        this.Move(_boundsOfObjHit.m_left - this.m_width, this.m_y);
        this.m_currentVelocity.m_dx *= -0.2;
        this.m_currentVelocity.m_dy *= 0.2;
      }*/

    }
  }

  //*********************
  //Check if hit a floor.
  //*********************
  if(collision.m_objHit.m_type == ObjectType.Floor)
  {
    //Find edges hit and resolve.
    if(collision.top == true)
    {
      //If hitting the floor on the top edge. Check direction of travel.
      //If travelling upwards then the player is passing through floor and so
      //ignore. If travelling downwards then land on floor if not enough power
      //to break trough it.
   
      if(this.m_currentVelocity.m_dy <= 0)
      {
        //Moving upwards. Ignore.
      }
      else if(this.m_currentVelocity.m_dy > 0)
      {
        //Moving downwards.

        //If power is great enough, break through floor.
        if(this.m_currentPowerY >= FloorSection.FORCE_TO_MOVE_DOWN_A_FLOOR)
        {
          this.m_currentPowerY -= FloorSection.FORCE_TO_MOVE_DOWN_A_FLOOR;
        }
        //If power not great enough, land.
        else
        {
          this.Move(this.m_x, _boundsOfObjHit.m_top  - this.m_height);
          this.m_currentVelocity.m_dx = 0;
          this.m_currentVelocity.m_dy = 0;

          this.m_onGround = true;
        }

        //Cause downwards destruction if first time hit.
        if(collision.m_objHit.m_block.m_blockIntegrity > 0)
        {
          collision.m_objHit.m_block.m_blockIntegrity = 0;
          this.m_damage.CreateFloorDamageAnimation(DamageVerticalDirection.DOWN, collision.m_objHit.m_x, collision.m_objHit.m_y);

         this.m_scoreHandler.AddChainLink(ScoreObjectType.FLOOR,
                                         ScoreHandler.FLOOR_SECTION_POINTS);
       }
      }
    }
    else if(collision.bottom == true)
    {
      //If hitting the floor on the bottom edge. Check direction of travel.
      //If travelling downwards then the player is passing through floor and so
      //ignore. If travelling upwards then break through if enough power or
      //bounce off if not.
      if(this.m_currentVelocity.m_dy >= 0)
      {
        //Moving downwards. Ignore.
      }
      else if(this.m_currentVelocity.m_dy < 0)
      {
        //Moving upwards.

        //If power is great enough, break through floor.
        if(this.m_currentPowerY >= FloorSection.FORCE_TO_MOVE_UP_A_FLOOR)
        {
          this.m_currentPowerY -= FloorSection.FORCE_TO_MOVE_UP_A_FLOOR;

          //Cause downwards destruction if first time hit.
          if(collision.m_objHit.m_block.m_blockIntegrity > 0)
          {
            collision.m_objHit.m_block.m_blockIntegrity = 0;
            this.m_damage.CreateFloorDamageAnimation(DamageVerticalDirection.UP,
                                                  collision.m_objHit.m_x,
                                                  collision.m_objHit.m_y - 192);

            this.m_scoreHandler.AddChainLink(ScoreObjectType.FLOOR,
                                         ScoreHandler.FLOOR_SECTION_POINTS);
          }
        }
        //If power not great enough, bounce.
        else
        {
          this.m_currentVelocity.m_dy *= -0.2;
        }
      }
    }
  }
  
  //********************************
  //Check if hit a building section.
  //********************************
  if(collision.m_objHit.m_type == ObjectType.Section)
  {
    //Get building type and react.
	if(collision.m_objHit.m_sectionType == SectionType.DESTRUCTABLE)
	{
      if(collision.m_objHit.m_transparentForeground != true)
      {
        this.m_damage.CreateSectionDamageAnimation(collision.m_objHit.m_x,
                                                   collision.m_objHit.m_y);

        this.m_scoreHandler.AddChainLink(collision.m_objHit.m_value,
                                       collision.m_objHit.m_points);
									   
		collision.m_objHit.m_transparentForeground = true;
      }
    }
    else if(collision.m_objHit.m_sectionType == SectionType.PASSABLE)
	{
      //Do nothing.
    }
    else if(collision.m_objHit.m_sectionType == SectionType.IMPASSABLE)
    {
      //If hit left.
	  if(collision.left == true)
      {
        this.Move(_boundsOfObjHit.m_left - this.m_width, this.m_y);
        this.m_currentVelocity.m_dx *= -0.2;
        this.m_currentVelocity.m_dy *= 0.2;
      }
	  
	  //If hit right.
	  else if(collision.right == true)
      {
        this.Move(_boundsOfObjHit.m_right, this.m_y);
        this.m_currentVelocity.m_dx *= -0.2;
        this.m_currentVelocity.m_dy *= 0.2;
      }
	  
	  //If hit top.
	  else if(collision.top == true)
      {
        this.Move(this.m_x, _boundsOfObjHit.m_top - this.m_height);
        this.m_currentVelocity.m_dx = 0.0;
        this.m_currentVelocity.m_dy = 0.0;
      }
	  
	  //If hit bottom.
	  else if(collision.bottom == true)
      {
        this.Move(this.m_x, _boundsOfObjHit.m_bottom);
        this.m_currentVelocity.m_dx *= 0.2;
        this.m_currentVelocity.m_dy *= -0.2;
      }
    }
  }
};

Player.prototype.UpdatePhysics = function()
{
  for(i = 0; i < this.m_collisions.length; i++)
  {
    this.HandleCollision(this.m_collisions[i]);
  }

  this.m_collisions = [];
};

