function Editor(level)
{
  var m_currentLevel = level;

  this.m_redButton = new Sprite("images/red-square.png", 32, 32);
  this.m_greenButton = new Sprite("images/green-square.png", 32, 32);
  this.m_blueButton = new Sprite("images/blue-square.png", 32, 32);

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
      }
    }

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

  }

  this.Draw = function(context, screenX, screenY, scale)
  {
    m_currentLevel.Draw(context);

    if(this.m_hoveredSection != null)
    {
      context.lineWidth = 3;
      context.strokeStyle = 'yellow';
      context.strokeRect(this.m_hoveredSection.m_bounds.m_left - screenX,
                         this.m_hoveredSection.m_bounds.m_top - screenY,
                         this.m_hoveredSection.m_bounds.m_width,
                         this.m_hoveredSection.m_bounds.m_height);
    }
  }

  this.MouseClick = function(mouseX, mouseY)
  {

  }

  this.MouseRelease = function(mouseX, mouseY)
  {

  }

  this.MouseMove = function(mouseX, mouseY)
  {

  }
};

