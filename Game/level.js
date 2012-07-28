function Level()
{
  //Dragging variables.
  var m_leftClickRegistered = false;
  var m_leftReleaseRegistered = true;
  var m_dragging = false;
  var m_startX = 0;
  var m_startY = 0;
  var m_endX = 0;
  var m_endY = 0;
  var m_diffX = 0;
  var m_diffY = 0;
  var m_maxDrag = 30;

  //Objects in the game.
  var m_character;
  var m_aim;
  var m_building;

  var m_objective;

  var m_physics = new PhysicsHandler();

  m_character = new Player();
  m_character.SetDimensions(46, 64);
  m_character.EnablePhysics(m_physics);
  m_character.Move(100, 400);

  var bg = new Sprite("images/Background.png", 800, 600);

  var m_aimPos = new Vector(0, 0);
  var m_aimSprite = new Sprite("images/Aim.png", 4, 4);

  m_building = new Building(m_physics, 400, 500, 3, 3, BuildingType.GreyBuilding);

  this.Update = function(dt, mouseX, mouseY, leftClick)
  {
    //Detect left click when it first occurs and handle event.
    if(leftClick == true && m_leftClickRegistered == false)
      this.MouseClick(mouseX, mouseY);

    //Detect left click release.
    if(leftClick == false && m_leftReleaseRegistered == false)
      this.MouseRelease(mouseX, mouseY);

    //Respond to mouse movement.
    this.MouseMove(mouseX, mouseY);

    m_character.Update(dt);

    //If not dragging, set aim sprite at players origin.
    if(m_dragging == false)
    {
      var _charOrigin = m_character.GetOrigin();
      m_aimPos.m_dx = _charOrigin.m_dx - 2;
      m_aimPos.m_dy = _charOrigin.m_dy - 2;
    }

    m_physics.UpdatePhysics();
  }

  this.Draw = function(context)
  {
    bg.Draw(context, 0, 0);
    m_building.Draw(context);
    m_character.Draw(context);
    m_aimSprite.Draw(context, m_aimPos.m_dx, m_aimPos.m_dy);
  }


  this.MouseClick = function(mouseX, mouseY)
  {
    //Register that this click has been detected and handled.
    m_leftClickRegistered = true;

    //Prepare to respond to left click release.
    m_leftReleaseRegistered = false;

    var _bounds = m_character.GetBounds();

    if(_bounds.CheckForPointCollision(mouseX, mouseY))
    {
      m_dragging = true;
      m_startX = mouseX;
      m_startY = mouseY;
    } 
  }

  this.MouseRelease = function(mouseX, mouseY)
  {
    //Register that this release has been detected and handled.
    m_leftReleaseRegistered = true;

    //Prepare to respond to next left click.
    m_leftClickRegistered = false;

    if(m_dragging == true)
    {
      m_dragging = false;
      m_endX = mouseX;
      m_endY = mouseY;

      var _origin = m_character.GetOrigin();

      m_diffX = _origin.m_dx - m_endX;
      m_diffY = _origin.m_dy - m_endY;

      m_character.Jump(m_diffX / 10, m_diffY / 10);
    }
  }

  this.MouseMove = function(mouseX, mouseY)
  {
    if(m_dragging == true)
    {
      m_endX = mouseX;
      m_endY = mouseY;

      var _origin = m_character.GetOrigin();

      m_diffX = _origin.m_dx - m_endX;
      m_diffY = _origin.m_dy - m_endY;

      m_aimPos.m_dx = _origin.m_dx + m_diffX;
      m_aimPos.m_dy = _origin.m_dy + m_diffY;
    }
  }
};

