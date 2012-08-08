function Editor(level)
{
  var m_currentLevel = level;

  //Section change variables.
  this.m_redButtonSprite = new Sprite("images/red-square.png", 32, 32);
  this.m_redButtonBounds = new BoundingBox(null, 0, 0, 32, 32);
  this.m_greenButtonSprite = new Sprite("images/green-square.png", 32, 32);
  this.m_greenButtonBounds = new BoundingBox(null, 0, 0, 32, 32);
  this.m_blueButtonSprite = new Sprite("images/blue-square.png", 32, 32);
  this.m_blueButtonBounds = new BoundingBox(null, 0, 0, 32, 32);
  
  //Section build variables.
  this.m_upArrowSprite = new Sprite("images/arrow-up.png", 32,32);
  this.m_upArrowBounds = new BoundingBox(null, 0, 0, 32, 32);
  this.m_leftArrowSprite = new Sprite("images/arrow-left.png", 32,32);
  this.m_leftArrowBounds = new BoundingBox(null, 0, 0, 32, 32);
  this.m_rightArrowSprite = new Sprite("images/arrow-right.png", 32,32);
  this.m_rightArrowBounds = new BoundingBox(null, 0, 0, 32, 32);
  this.m_downArrowSprite = new Sprite("images/arrow-down.png", 32,32);
  this.m_downArrowBounds = new BoundingBox(null, 0, 0, 32, 32);

  this.m_hoveredSection = null;

  this.Update = function(dt, mouseX, mouseY,
                         screenX, screenY,
                         leftClick, leftRelease)
  {
    //Get array of building sections that can be seen on the screen. This is
    //achieved by making a bounding box of the viewable screen in the game
    //world and checking for collisions against all buildings and then sections.

    var _screenBounds = new BoundingBox(null, screenX, screenY,
                                        Game.CANVAS_WIDTH, Game.CANVAS_HEIGHT);

    var _buildingsInScreen = new Array();
    for(building = 0; building < level.m_buildings.length; building++)
    {
      if(level.m_buildings[building].m_bounds.CheckForCollision(_screenBounds) == true)
      {
        _buildingsInScreen.push(level.m_buildings[building]);
      }
    }

    //For each building on screen, find the sections within it currently on
    //screen.
    var _sectionsInScreen = new Array();
    for(building = 0; building < _buildingsInScreen.length; building++)
    {
      for(sectionRow = 0;
          sectionRow < _buildingsInScreen[building].m_sections.length;
          sectionRow++)
      {
        for(sectionColumn = 0;
            sectionColumn < _buildingsInScreen[building].m_sections[sectionRow].length;
            sectionColumn++)
        {
          if(_buildingsInScreen[building].m_sections[sectionRow][sectionColumn].m_bounds.CheckForCollision(_screenBounds) == true)
          {
            _sectionsInScreen.push(
              _buildingsInScreen[building].m_sections[sectionRow][sectionColumn]);
          }
        }
      }
    }

    //Determine which section the mouse might be over.
    this.m_hoveredSection = null;
    for(section = 0; section < _sectionsInScreen.length; section++)
    {
      if(_sectionsInScreen[section].m_bounds.CheckForPointCollision(
                                                  mouseX + screenX,
                                                  mouseY + screenY) == true)
      {
        this.m_hoveredSection = _sectionsInScreen[section];
		
		//Position visual change buttons.
		this.m_redButtonBounds.Move(this.m_hoveredSection.m_x, this.m_hoveredSection.m_y);
		this.m_greenButtonBounds.Move(this.m_hoveredSection.m_x + 32, this.m_hoveredSection.m_y);
		this.m_blueButtonBounds.Move(this.m_hoveredSection.m_x + 64, this.m_hoveredSection.m_y);
		
		//Position building editing buttons.
		this.m_upArrowBounds.Move(this.m_hoveredSection.m_x, this.m_hoveredSection.m_y + 32);
		this.m_leftArrowBounds.Move(this.m_hoveredSection.m_x, this.m_hoveredSection.m_y + 64);
		this.m_rightArrowBounds.Move(this.m_hoveredSection.m_x + 32, this.m_hoveredSection.m_y + 32);
		this.m_downArrowBounds.Move(this.m_hoveredSection.m_x + 32, this.m_hoveredSection.m_y + 64);
      }
    }

    if(leftClick == true)
    {
      this.MouseClick(mouseX + screenX, mouseY + screenY);
    }

    if(leftRelease == true)
    {
      this.MouseRelease(mouseX, mouseY);
    }

    //Respond to mouse movement.
    this.MouseMove(mouseX, mouseY);

  }

  this.Draw = function(context, screenX, screenY, scale)
  {
    m_currentLevel.Draw(context);

    if(this.m_hoveredSection != null)
    {
      //Draw buttons.
	  this.m_redButtonSprite.Draw(context,
                                  this.m_redButtonBounds.m_left,
                                  this.m_redButtonBounds.m_top,
								  screenX,
								  screenY,
								  scale);
      this.m_greenButtonSprite.Draw(context,
                                  this.m_greenButtonBounds.m_left,
                                  this.m_greenButtonBounds.m_top,
								  screenX,
								  screenY,
								  scale);
      this.m_blueButtonSprite.Draw(context,
                                  this.m_blueButtonBounds.m_left,
                                  this.m_blueButtonBounds.m_top,
								  screenX,
								  screenY,
								  scale);

      //Draw arrows.
      this.m_upArrowSprite.Draw(context,
                                  this.m_upArrowBounds.m_left,
                                  this.m_upArrowBounds.m_top,
								  screenX,
								  screenY,
								  scale);
      this.m_leftArrowSprite.Draw(context,
                                  this.m_leftArrowBounds.m_left,
                                  this.m_leftArrowBounds.m_top,
								  screenX,
								  screenY,
								  scale);
      this.m_rightArrowSprite.Draw(context,
                                  this.m_rightArrowBounds.m_left,
                                  this.m_rightArrowBounds.m_top,
								  screenX,
								  screenY,
								  scale);
      this.m_downArrowSprite.Draw(context,
                                  this.m_downArrowBounds.m_left,
                                  this.m_downArrowBounds.m_top,
								  screenX,
								  screenY,
								  scale);

      context.lineWidth = 1;
      context.strokeStyle = 'yellow';
      context.strokeRect(this.m_hoveredSection.m_bounds.m_left - screenX,
                         this.m_hoveredSection.m_bounds.m_top - screenY,
                         this.m_hoveredSection.m_bounds.m_width,
                         this.m_hoveredSection.m_bounds.m_height);
    }
  }

  this.MouseClick = function(mouseX, mouseY)
  {
    if(this.m_hoveredSection != null)
    {
      //Determine if any buttons have been clicked.
      if(this.m_redButtonBounds.CheckForPointCollision(mouseX, mouseY) == true)
	  {
	    //Check if section is currently of this type. If so progress type. If not change to type.
		if(this.m_hoveredSection.m_sectionType == SectionType.DESTRUCTABLE)
		{
		  var _newValue = null;
		  var _currentValue = this.m_hoveredSection.m_sectionValue;
		  
		  if(_currentValue == SectionValue.BRONZE)
		  {
		    _newValue = SectionValue.SILVER;
		  }
		  else if(_currentValue == SectionValue.SILVER)
		  {
		    _newValue = SectionValue.GOLD;
		  }
		  else if(_currentValue == SectionValue.GOLD)
		  {
		    _newValue = SectionValue.BRONZE;
		  }

          this.m_hoveredSection.ChangeType(SectionType.DESTRUCTABLE, _newValue);
		}
		else
		{
          this.m_hoveredSection.ChangeType(SectionType.DESTRUCTABLE, SectionValue.BRONZE);
		}
	  }
	  
      if(this.m_greenButtonBounds.CheckForPointCollision(mouseX, mouseY) == true)
	  {
        this.m_hoveredSection.ChangeType(SectionType.PASSABLE, SectionValue.PLAIN);
	  }
	  
      if(this.m_blueButtonBounds.CheckForPointCollision(mouseX, mouseY) == true)
	  {
        if(this.m_hoveredSection.m_sectionType == SectionType.IMPASSABLE)
		{
		  var _newValue = null;
		  var _currentValue = this.m_hoveredSection.m_sectionValue;
		  
		  if(_currentValue == SectionValue.BILLBOARD1)
		  {
		    _newValue = SectionValue.BILLBOARD2;
		  }
		  else if(_currentValue == SectionValue.BILLBOARD2)
		  {
		    _newValue = SectionValue.BILLBOARD3;
		  }
		  else if(_currentValue == SectionValue.BILLBOARD3)
		  {
		    _newValue = SectionValue.BILLBOARD4;
		  }
          else if(_currentValue == SectionValue.BILLBOARD4)
		  {
		    _newValue = SectionValue.BILLBOARD5;
		  }
		  else if(_currentValue == SectionValue.BILLBOARD5)
		  {
		    _newValue = SectionValue.BILLBOARD6;
		  }
		  else if(_currentValue == SectionValue.BILLBOARD6)
		  {
		    _newValue = SectionValue.BILLBOARD7;
		  }
          else if(_currentValue == SectionValue.BILLBOARD7)
		  {
		    _newValue = SectionValue.BILLBOARD8;
		  }
		  else if(_currentValue == SectionValue.BILLBOARD8)
		  {
		    _newValue = SectionValue.BILLBOARD9;
		  }
		  else if(_currentValue == SectionValue.BILLBOARD9)
		  {
		    _newValue = SectionValue.BILLBOARD1;
		  }

          this.m_hoveredSection.ChangeType(SectionType.IMPASSABLE, _newValue);
		}
		else
		{
          this.m_hoveredSection.ChangeType(SectionType.IMPASSABLE, SectionValue.BILLBOARD1);
		}
	  }
	}
  }

  this.MouseRelease = function(mouseX, mouseY)
  {

  }

  this.MouseMove = function(mouseX, mouseY)
  {

  }
};

