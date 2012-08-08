function Level()
{
  //Dragging variables.
  var m_dragging = false;
  var m_startX = 0;
  var m_startY = 0;
  var m_endX = 0;
  var m_endY = 0;
  var m_diffX = 0;
  var m_diffY = 0;
  var m_maxPower = 100;
  var m_power = 0;

  //Objects in the game.
  var m_character;
  var m_aim;
  this.m_buildings;

  var m_scoreHandler = new ScoreHandler();
  var m_objective;

  var m_physics = new PhysicsHandler();
  var m_damage = new DamageHandler();
  
  m_character = new Player(m_damage, m_scoreHandler);
  m_character.SetDimensions(103, 128);
  m_character.EnablePhysics(m_physics, false, true);
  m_character.Move(0, 472);

  var bg = new Sprite("images/SkyBackground.png", 800, 600);
  
  var m_aimPos = new Vector(0, 0);
  var m_aimSprite = new Sprite("images/Aim.png", 4, 4);

  //Side-scrolling variables.
  this.m_screenX = 0;
  this.m_screenY = 0;
  this.m_scale = 1.0;
  
  //Scoring variables.
  var m_timeElapsed = 0;

  this.Update = function(dt, mouseX, mouseY, leftClick, leftRelease)
  {
    m_timeElapsed += dt;
	
    if(leftClick == true)
    {
      this.MouseClick(mouseX, mouseY);
    }

    if(leftRelease == true)
    {
      this.MouseRelease(mouseX, mouseY);
    }

    //Respond to mouse movement.
    this.MouseMove(mouseX, mouseY);

    m_character.Update(dt);

    //If not dragging, set aim sprite at players origin.
    if(m_dragging == false)
    {
      var _charOrigin = m_character.GetOrigin();
      m_aimPos.m_dx = _charOrigin.m_dx - 2;
      m_aimPos.m_dy = _charOrigin.m_dy - 2;
	  m_power = 0;
    }

    m_physics.UpdatePhysics();
	
    m_building.Update(dt);

    m_damage.Update(dt);

    m_scoreHandler.Update(dt);

    //var _scaledScreenX = 50 * this.m_scale;
    //var _scaledScreenY = 422 * this.m_scale;

    //var _screenXOffset = (Game.CANVAS_WIDTH - (Game.CANVAS_WIDTH / this.m_scale)) / 2;
    //var _screenYOffset = (Game.CANVAS_HEIGHT - (Game.CANVAS_HEIGHT / this.m_scale)) / 2;
	
	//m_screenX = m_character.m_x - _scaledScreenX + _screenXOffset;
    //m_screenY = m_character.m_y - _scaledScreenY + _screenYOffset;
	
    this.m_screenX = m_character.m_x - 100;
    this.m_screenY = m_character.m_y - (500 - (m_character.m_height * this.m_scale));
  }

  this.Draw = function(context)
  {
    bg.Draw(context, 0, 0, this.m_screenX, this.m_screenY, this.m_scale);
    m_building.Draw(context, this.m_screenX, this.m_screenY, this.m_scale);
    m_damage.Draw(context, this.m_screenX, this.m_screenY, this.m_scale);
    m_character.Draw(context, this.m_screenX, this.m_screenY, this.m_scale);
    m_aimSprite.Draw(context, m_aimPos.m_dx, m_aimPos.m_dy,
                     this.m_screenX, this.m_screenY, this.m_scale);

    context.fillStyle = "Red";
    context.fillText("Power: " + m_power, 10, 50);
    context.fillText("Time Score: " + m_timeElapsed.toFixed(2), 10, 70);
    context.fillText("Damage Score: " + m_scoreHandler.m_currentScore, 10, 90);
    context.fillText("Damage Chain Score: " + m_scoreHandler.m_currentChainScore, 10, 110);
    m_scoreHandler.Draw(context, 10, 150);
  }

  this.LoadLevel = function(levelFile)
  {
    //Load existing level plan.

    var _xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
      _xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
      _xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    _xmlhttp.open("GET", file, false);
    _xmlhttp.send();
    var _stringDoc = _xmlhttp.response;
    var _parser = new DOMParser();
    var _xmlDoc = _parser.parseFromString(_stringDoc,'text/xml');

    //Get level.
    var _level = _xmlDoc.getElementsByTagName("level");

    //Get buildings in level.
    var _buildings = _level[0].getElementsByTagName("buildings");

    //Get number of buildings in level.
    var _numBuildings = _buildings[0].getElementsByTagName("number")[0].childNodes[0].nodeValue;
    this.m_buildings = new Array(_numBuildings);

//***************************
//Work from here.

    //Build building.
    var _buildings = _xmlDoc.getElementsByTagName("building");

    var _width = parseFloat(_buildings[0].getElementsByTagName("width")[0].childNodes[0].nodeValue);

    var _height = parseFloat(_buildings[0].getElementsByTagName("height")[0].childNodes[0].nodeValue);

    //Create sections.
    this.m_sections = new Array(_width);
    for(section = 0; section < _width; section++)
    {
      this.m_sections[section] = new Array(_height);
    }

    //Start inserting correct sections into section array.
    var _rows = _buildings[0].getElementsByTagName("row");

    for(row = 0; row < _height; row++)
    {
      var _sections = _rows[row].getElementsByTagName("section");

      for(column = 0; column < _width; column++)
      {
        var _type = _sections[column].getElementsByTagName("type")[0].childNodes[0].nodeValue;

        if(_type == "Destructable")
        {
          this.m_sections[column][row] = new Section(
              physics,
              this.m_foregroundSprite,
              this.m_foregroundSpriteTransparent,
              this.m_backgroundSprite,
              this.m_x + (column * Building.SECTION_WIDTH) + Building.WALL_WIDTH,
              this.m_y - (row * Building.SECTION_HEIGHT),
              Building.SECTION_WIDTH, Building.SECTION_HEIGHT);

          this.m_bounds.AddChildBounds(this.m_sections[column][row].GetBounds());
        }
      }
    }

    //Add floors to correspond with tops of sections.
    this.m_floors = new Array();
    for(floorX = 0; floorX < _width; floorX++)
    {
      for(floorY = 0; floorY < _height; floorY++)
      {
        this.m_floors.push(
          new FloorSection(physics, this.m_floorSprite, this.m_floorBrokenSprite,
                           this.m_x + (floorX * Building.SECTION_WIDTH) + Building.WALL_WIDTH,
        this.m_y - (floorY * Building.SECTION_HEIGHT)));

        this.m_bounds.AddChildBounds(this.m_floors[this.m_floors.length - 1].GetBounds());
      }
    }

    //Add walls to correspond with sides of sections.
    //If on outside of building, set out.
    //If inbetween sections put embed half and half.
    this.m_walls = new Array();
    for(wallX = 0; wallX <= _width; wallX++)
    {
      for(wallY = 0; wallY < _height; wallY++)
      {
        var _wall;

        //If first wall.
        if(wallX == 0)
        {
          _wall = new WallSection(physics, this.m_wallSprite, this.m_x,
                                  this.m_y - (wallY * Building.SECTION_HEIGHT));
        }
        //If internal wall.
        else if(wallX > 0 && wallX < _width)
        {
          _wall = new WallSection(physics, this.m_wallSprite,
          this.m_x + (Building.SECTION_WIDTH * wallX) + Building.WALL_WIDTH - (Building.WALL_WIDTH * 0.5),
          this.m_y - (wallY * Building.SECTION_HEIGHT));
        }
        //If last wall.
        else if(wallX == _width)
        {
          _wall = new WallSection(physics, this.m_wallSprite,
                                  this.m_x + (Building.SECTION_WIDTH * wallX) + Building.WALL_WIDTH,
                                  this.m_y - (wallY * Building.SECTION_HEIGHT));
        }

        this.m_bounds.AddChildBounds(_wall.GetBounds());
        this.m_walls.push(_wall);
      }
    }
  }

  this.MouseClick = function(mouseX, mouseY)
  {
    var _bounds = m_character.GetBounds();

    if(_bounds.CheckForPointCollision(mouseX + this.m_screenX,
                                      mouseY + this.m_screenY))
    {
      m_dragging = true;
      m_startX = mouseX + this.m_screenX;
      m_startY = mouseY + this.m_screenY;
    }
  }

  this.MouseRelease = function(mouseX, mouseY)
  {
    if(m_dragging == true)
    {
      m_dragging = false;

      m_character.Jump(m_diffX / 10, m_diffY / 10);
    }
  }

  this.MouseMove = function(mouseX, mouseY)
  {
    if(m_dragging == true)
    {
      m_endX = mouseX + this.m_screenX;
      m_endY = mouseY + this.m_screenY;

      var _origin = m_character.GetOrigin();

      m_diffX = _origin.m_dx - m_endX;
      m_diffY = _origin.m_dy - m_endY;

      //Calculate power and cap at max power.
      m_power = Math.sqrt((m_diffX * m_diffX) + (m_diffY * m_diffY));

      if(m_power > m_maxPower)
      {
        //Get aim angle and cap power at max power.
        var _radians = Math.atan2(m_diffY, m_diffX);
        m_power = m_maxPower;

        //Get new x and y values.
        m_diffX = m_maxPower * Math.cos(_radians);
        m_diffY = m_maxPower * Math.sin(_radians);
      }

      //Half power to make jumps less high.
      m_power /= 2;

      m_aimPos.m_dx = _origin.m_dx + m_diffX;
      m_aimPos.m_dy = _origin.m_dy + m_diffY;
    }
  }
};

