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

  var bg1 = new Sprite("images/background_with_floor.png", 900, 600);
  var bg2 = new Sprite("images/plain_sky.png", 900, 600);
  var bg3 = new Sprite("images/plain_sky_with_clouds.png", 900, 600);
  
  var m_aimPos = new Vector(0, 0);
  var m_aimSprite = new Sprite("images/Aim.png", 4, 4);

  this.m_start = new Sprite("images/start.png", 256, 160);
  this.m_startPos = new Vector(103, 440);
  this.m_end = new Objective("images/finish.png", 32636, 440, 256, 160);
  this.m_end.EnablePhysics(m_physics, false, true);

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
	
	for(building = 0; building < this.m_buildings.length; building++)
	{
		this.m_buildings[building].Update(dt);
	}

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
    for(bg = 0; bg < 20; bg++)
	{
      bg1.Draw(context, 900 * bg, 200, this.m_screenX, this.m_screenY, this.m_scale);
	  bg2.Draw(context, 900 * bg, -400, this.m_screenX, this.m_screenY, this.m_scale);
	  bg3.Draw(context, 900 * bg, -1000, this.m_screenX, this.m_screenY, this.m_scale);
    }

    for(building = 0; building < this.m_buildings.length; building++)
    {
      this.m_buildings[building].Draw(
          context, this.m_screenX, this.m_screenY, this.m_scale);
    }

    this.m_start.Draw(context, this.m_startPos.m_dx, this.m_startPos.m_dy,
                      this.m_screenX, this.m_screenY, this.m_scale);
    this.m_end.Draw(context, this.m_screenX, this.m_screenY, this.m_scale);

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

    _xmlhttp.open("GET", levelFile, false);
    _xmlhttp.send();
    var _stringDoc = _xmlhttp.response;
    var _parser = new DOMParser();
    var _xmlDoc = _parser.parseFromString(_stringDoc,'text/xml');

    //Get level.
    var _level = _xmlDoc.getElementsByTagName("level");

    //Get set of buildings in level.
    var _setOfBuildings = _level[0].getElementsByTagName("buildings");

    //Get number of buildings in level and set up array to hold them.
    var _numBuildings = parseFloat(_setOfBuildings[0].getElementsByTagName("number")[0].childNodes[0].nodeValue);
    this.m_buildings = new Array(_numBuildings);

	//Get buildings.
	var _buildings = _setOfBuildings[0].getElementsByTagName("building");
	
	//Iterate through buildings and construct them.
	for(building = 0; building < _numBuildings; building++)
	{
      var _x = parseFloat(_buildings[building].getElementsByTagName("x")[0].childNodes[0].nodeValue);
      var _y = parseFloat(_buildings[building].getElementsByTagName("y")[0].childNodes[0].nodeValue);
	  var _width = parseFloat(_buildings[building].getElementsByTagName("width")[0].childNodes[0].nodeValue);
      var _height = parseFloat(_buildings[building].getElementsByTagName("height")[0].childNodes[0].nodeValue);
      var _design = _buildings[building].getElementsByTagName("design")[0].childNodes[0].nodeValue;
	  
	  var _newBuilding = new Building(m_physics, _x, _y);

      //Create sections.
      _newBuilding.m_sections = new Array(_width);
      for(section = 0; section < _width; section++)
      {
        _newBuilding.m_sections[section] = new Array(_height);
      }

      //Start inserting correct sections into section array.
      var _rows = _buildings[building].getElementsByTagName("row");

      for(row = 0; row < _height; row++)
      {
        var _sections = _rows[row].getElementsByTagName("section");

        for(column = 0; column < _width; column++)
        {
          var _type = _sections[column].getElementsByTagName("type")[0].childNodes[0].nodeValue;
		  var _value = _sections[column].getElementsByTagName("value")[0].childNodes[0].nodeValue;

          if(_type == "Destructable")
          {
            //Determine type of destructable section.
            var _sectionValue = null;
			if(_value == "Bronze")
			{
			  _sectionValue = SectionValue.BRONZE;
			}
			else if(_value == "Silver")
			{
			  _sectionValue = SectionValue.SILVER;
			}
			else if(_value == "Gold")
			{
			  _sectionValue = SectionValue.GOLD;
			}
			
            _newBuilding.m_sections[column][row] = new Section(
                m_physics,
                _newBuilding.m_foregroundSprite,
                _newBuilding.m_backgroundSprite,
				_newBuilding.m_passableForegroundSprite,
                _newBuilding.m_passableBackgroundSprite,
				_newBuilding.m_impassableSprite,
                _newBuilding.m_x + (column * Building.SECTION_WIDTH) + Building.WALL_WIDTH,
                _newBuilding.m_y - (row * Building.SECTION_HEIGHT),
                SectionType.DESTRUCTABLE,
			    _sectionValue);

            _newBuilding.m_bounds.AddChildBounds(_newBuilding.m_sections[column][row].GetBounds());
          }
		  else if(_type == "Passable")
          {
			//Determine type of passable section.
            var _sectionValue = null;
			if(_value == "Plain")
			{
			  _sectionValue = PLAIN;
			}
			
            _newBuilding.m_sections[column][row] = new Section(
                m_physics,
                _newBuilding.m_foregroundSprite,
                _newBuilding.m_backgroundSprite,
				_newBuilding.m_passableForegroundSprite,
                _newBuilding.m_passableBackgroundSprite,
				_newBuilding.m_impassableSprite,
                _newBuilding.m_x + (column * Building.SECTION_WIDTH) + Building.WALL_WIDTH,
                _newBuilding.m_y - (row * Building.SECTION_HEIGHT),
                SectionType.PASSABLE,
			    _sectionValue);

            _newBuilding.m_bounds.AddChildBounds(_newBuilding.m_sections[column][row].GetBounds());
          }
		  else if(_type == "Impassable")
          {
		    //Determine type of impassable section.
            var _sectionValue = null;
			if(_value == "Billboard1")
			{
			  _sectionValue = SectionValue.BILLBOARD1;
			}
			else if(_value == "Billboard2")
			{
			  _sectionValue = SectionValue.BILLBOARD2;
			}
			else if(_value == "Billboard3")
			{
			  _sectionValue = SectionValue.BILLBOARD3;
			}
            else if(_value == "Billboard4")
			{
			  _sectionValue = SectionValue.BILLBOARD4;
			}
			else if(_value == "Billboard5")
			{
			  _sectionValue = SectionValue.BILLBOARD5;
			}
			else if(_value == "Billboard6")
			{
			  _sectionValue = SectionValue.BILLBOARD6;
			}
            else if(_value == "Billboard7")
			{
			  _sectionValue = SectionValue.BILLBOARD7;
			}
			else if(_value == "Billboard8")
			{
			  _sectionValue = SectionValue.BILLBOARD8;
			}
			else if(_value == "Billboard9")
			{
			  _sectionValue = SectionValue.BILLBOARD9;
			}
			
            _newBuilding.m_sections[column][row] = new Section(
                m_physics,
                _newBuilding.m_foregroundSprite,
                _newBuilding.m_backgroundSprite,
				_newBuilding.m_passableForegroundSprite,
                _newBuilding.m_passableBackgroundSprite,
				_newBuilding.m_impassableSprite,
                _newBuilding.m_x + (column * Building.SECTION_WIDTH) + Building.WALL_WIDTH,
                _newBuilding.m_y - (row * Building.SECTION_HEIGHT),
                SectionType.IMPASSABLE,
			    _sectionValue);

            _newBuilding.m_bounds.AddChildBounds(_newBuilding.m_sections[column][row].GetBounds());
          }
        }
      }
	
      //Add floors to correspond with tops of sections.
      _newBuilding.m_floors = new Array();
      for(floorX = 0; floorX < _width; floorX++)
      {
        for(floorY = 0; floorY < _height; floorY++)
        {
          _newBuilding.m_floors.push(
            new FloorSection(m_physics, _newBuilding.m_floorSprite, _newBuilding.m_floorBrokenSprite,
                             _newBuilding.m_x + (floorX * Building.SECTION_WIDTH) + Building.WALL_WIDTH,
          _newBuilding.m_y - (floorY * Building.SECTION_HEIGHT)));

          _newBuilding.m_bounds.AddChildBounds(_newBuilding.m_floors[_newBuilding.m_floors.length - 1].GetBounds());
        }
      }

      //Add walls to correspond with sides of sections.
      //If on outside of building, set out.
      //If inbetween sections put embed half and half.
      _newBuilding.m_walls = new Array();
      for(wallX = 0; wallX <= _width; wallX++)
      {
        for(wallY = 0; wallY < _height; wallY++)
        {
          var _wall;

          //If first wall.
          if(wallX == 0)
          {
            _wall = new WallSection(m_physics, _newBuilding.m_wallSprite, _newBuilding.m_x,
                                    _newBuilding.m_y - (wallY * Building.SECTION_HEIGHT));
          }
          //If internal wall.
          else if(wallX > 0 && wallX < _width)
          {
            _wall = new WallSection(m_physics, _newBuilding.m_wallSprite,
            _newBuilding.m_x + (Building.SECTION_WIDTH * wallX) + Building.WALL_WIDTH - (Building.WALL_WIDTH * 0.5),
            _newBuilding.m_y - (wallY * Building.SECTION_HEIGHT));
          }
          //If last wall.
          else if(wallX == _width)
          {
            _wall = new WallSection(m_physics, _newBuilding.m_wallSprite,
                                    _newBuilding.m_x + (Building.SECTION_WIDTH * wallX) + Building.WALL_WIDTH,
                                    _newBuilding.m_y - (wallY * Building.SECTION_HEIGHT));
          }

          _newBuilding.m_bounds.AddChildBounds(_wall.GetBounds());
          _newBuilding.m_walls.push(_wall);
        }
      }

	  this.m_buildings[building] = _newBuilding;
	}
  }
  
  this.GetLevelDetails = function()
  {
	var _levelDetails = "<level><buildings>";
	
	var _numBuildings = this.m_buildings.length;
	_levelDetails = _levelDetails + "<number>" + _numBuildings + "</number>";
	
	for(building = 0; building < this.m_buildings.length; building++)
	{
		_levelDetails = _levelDetails
						+ "<building><x>" + this.m_buildings[building].m_x + "</x><y>"
						+ this.m_buildings[building].m_y + "</y><width>"
						+ this.m_buildings[building].m_sections.length + "</width><height>"
						+ this.m_buildings[building].m_sections[0].length + "</height>"
						+ "<design>Plain</design>";
						
        var _sections = this.m_buildings[building].m_sections;
		
		for(row = 0; row < _sections.length; row++)
		{
			_levelDetails += "<row>";
			
			for(column = 0; column < _sections[0].length; column++)
			{
				_levelDetails += "<section><type>";
				if(_sections[row][column].m_sectionType == SectionType.DESTRUCTABLE)
				{
					_levelDetails += "Destructable";
				}
				else if(_sections[row][column].m_sectionType == SectionType.PASSABLE)
				{
					_levelDetails += "Passable";
				}
				else if(_sections[row][column].m_sectionType == SectionType.IMPASSABLE)
				{
					_levelDetails += "Impassable";
				}
				
				_levelDetails += "</type><value>";
				
				if(_sections[row][column].m_sectionValue == SectionValue.BRONZE)
				{
					_levelDetails += "Bronze";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.SILVER)
				{
					_levelDetails += "Silver";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.GOLD)
				{
					_levelDetails += "Gold";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.PLAIN)
				{
					_levelDetails += "Plain";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD1)
				{
					_levelDetails += "Billboard1";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD2)
				{
					_levelDetails += "Billboard2";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD3)
				{
					_levelDetails += "Billboard3";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD4)
				{
					_levelDetails += "Billboard4";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD5)
				{
					_levelDetails += "Billboard5";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD6)
				{
					_levelDetails += "Billboard6";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD7)
				{
					_levelDetails += "Billboard7";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD8)
				{
					_levelDetails += "Billboard8";
				}
				else if(_sections[row][column].m_sectionValue == SectionValue.BILLBOARD9)
				{
					_levelDetails += "Billboard9";
				}
                
				_levelDetails += "</value></section>";
			}
			
			_levelDetails += "</row>";		
		}		
		
		_levelDetails += "</building>";
	}
	
	_levelDetails += "</buildings></level>";
	
	return _levelDetails;
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
	  
	  m_character.Crouch();
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

