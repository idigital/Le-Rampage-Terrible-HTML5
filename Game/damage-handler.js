DamageHorizontalDirection = { LEFT : "left", RIGHT : "right" };
DamageVerticalDirection = { UP : "up", DOWN : "down" };

function DamageHandler()
{
  //Constants.
  //Animation length in milliseconds.
  DamageHandler.SECTION_EXPLOSION_LENGTH = 1000;
  DamageHandler.WALL_EXPLOSION_LENGTH = 1000;
  DamageHandler.FLOOR_EXPLOSION_LENGTH = 1000;

  //
  var m_currentDamageAnimations = new Array();

  //**************************************************************************
  //Damage animation sprite sheets;
  //**************************************************************************

  //Section.
  this.m_sectionExplosion = new Image();
  this.m_sectionExplosion.src = "images/explosion-animation.png";

  //Walls.
  this.m_wallOneThirdExplosionLeft = new Image();
  this.m_wallOneThirdExplosionLeft.src = "images/wall-explosion-left.png";

  this.m_wallOneThirdExplosionRight = new Image();
  this.m_wallOneThirdExplosionRight.src = "images/wall-explosion-right.png";

  this.m_wallTwoThirdsExplosionLeft = new Image();
  this.m_wallTwoThirdsExplosionLeft.src =
                                  "images/two-thirds-wall-explosion-left.png";

  this.m_wallTwoThirdsExplosionRight = new Image();
  this.m_wallTwoThirdsExplosionRight.src =
                                  "images/two-thirds-wall-explosion-right.png";

  this.m_wallWholeExplosionLeft = new Image();
  this.m_wallWholeExplosionLeft.src = "images/whole-wall-explosion-left.png";

  this.m_wallWholeExplosionRight = new Image();
  this.m_wallWholeExplosionRight.src = "images/whole-wall-explosion-right.png";

  //Floors.
  this.m_floorUpwardsExplosion = new Image();
  this.m_floorUpwardsExplosion.src = "images/floor-explosion-up.png";

  this.m_floorDownwardsExplosion = new Image();
  this.m_floorDownwardsExplosion.src = "images/floor-explosion-down.png";

  //**************************************************************************
  //Methods.
  //**************************************************************************

  //**************************************************************************
  //
  //**************************************************************************
  this.CreateSectionDamageAnimation = function(x, y)
  {
    var _damageAnimation = new DamageAnimation(this.m_sectionExplosion,
                                               x, y, 256, 192, 8);

    _damageAnimation.m_animation.m_timeLength
      = DamageHandler.SECTION_EXPLOSION_LENGTH;

    m_currentDamageAnimations.push(_damageAnimation);
  };

  //**************************************************************************
  //
  //**************************************************************************
  this.CreateFloorDamageAnimation = function(damageDirection, x, y)
  {
    var _damageAnimation = null;

    if(damageDirection == DamageVerticalDirection.UP)
    {
      var _damageAnimation = new DamageAnimation(this.m_floorUpwardsExplosion,
                                                 x, y, 256, 192, 6);
    }
    else if(damageDirection == DamageVerticalDirection.DOWN)
    {
      var _damageAnimation = new DamageAnimation(this.m_floorDownwardsExplosion,
                                                 x, y, 256, 192, 6);
    }

    //Check animation has been created and add to array if so.
    if(_damageAnimation != null)
    {
      _damageAnimation.m_animation.m_timeLength
        = DamageHandler.FLOOR_EXPLOSION_LENGTH;

      m_currentDamageAnimations.push(_damageAnimation);
    }
  };

  //**************************************************************************
  //
  //**************************************************************************
  this.CreateWallDamageAnimation = function(damageDirection, numSections, x, y)
  {
    var _damageAnimation = null;

    //Use direction and number of sections to select correct animation.
    if(damageDirection == DamageHorizontalDirection.LEFT)
    {
      if(numSections == 1)
      {
        _damageAnimation = new DamageAnimation(this.m_wallOneThirdExplosionLeft,
                                               x, y, 64, 64, 4);
      }
      else if(numSections == 2)
      {
        _damageAnimation = new DamageAnimation(this.m_wallTwoThirdsExplosionLeft,
                                               x, y, 64, 128, 4);
      }
      else if(numSections == 3)
      {
        _damageAnimation = new DamageAnimation(this.m_wallWholeExplosionLeft,
                                               x, y, 256, 192, 6)
      }
    }
    else if(damageDirection == DamageHorizontalDirection.RIGHT)
    {
      if(numSections == 1)
      {
        _damageAnimation = new DamageAnimation(this.m_wallOneThirdExplosionRight,
                                               x, y, 64, 64, 4);
      }
      else if(numSections == 2)
      {
        _damageAnimation = new DamageAnimation(this.m_wallTwoThirdsExplosionRight,
                                               x, y, 64, 128, 4);
      }
      else if(numSections == 3)
      {
        _damageAnimation = new DamageAnimation(this.m_wallWholeExplosionRight,
                                               x, y, 256, 192, 6)
      }
    }

    //Check animation has been created and add to array if so.
    if(_damageAnimation != null)
    {
      _damageAnimation.m_animation.m_timeLength
        = DamageHandler.WALL_EXPLOSION_LENGTH;

      m_currentDamageAnimations.push(_damageAnimation);
    }
  };

  //**************************************************************************
  //
  //**************************************************************************
  this.Update = function(dt)
  {
    for(currentAnimation = 0;
        currentAnimation < m_currentDamageAnimations.length;
        currentAnimation++)
    {
      m_currentDamageAnimations[currentAnimation].Update(dt);
    }
  };

  //**************************************************************************
  //
  //**************************************************************************
  this.Draw = function(context, screenX, screenY)
  {
    
  };
};

