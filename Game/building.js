BuildingType = { GreyBuilding : 0,
                 BlueBuilding : 1,
                 GlassBuilding : 2
	       };
		   
Building.prototype = new GameObject();

function Building(physics, x, y)
{
  //Constants.
  Building.SECTION_WIDTH = 256;
  Building.SECTION_HEIGHT = 192;
  Building.WALL_WIDTH = 8;
  Building.WALL_HEIGHT = 192;
  Building.SECTIONS = 3;
  Building.FLOOR_WIDTH = 256;
  Building.FLOOR_HEIGHT = 8;

  this.m_x = x;
  this.m_y = y;
  
  this.m_type = ObjectType.Building;

  //Holds the building's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;

  //A 2d array that holds the sections of the building.
  this.m_sections = null;

  //Arrays that hold the wall and floor sections of the building.
  this.m_walls = null;
  this.m_floors = null;

  //Load the sprites required for the section's foreground, background, the
  //floor sprite and wall sprite.
  this.m_foregroundSprite = new Sprite("images/sectionForeground.png",
                                       Building.SECTION_WIDTH,
                                       Building.SECTION_HEIGHT);

  this.m_foregroundSpriteTransparent
    = new Sprite("images/sectionForegroundTransparent.png",
                 Building.SECTION_WIDTH,
                 Building.SECTION_HEIGHT);

  this.m_backgroundSprite = new Sprite("images/sectionBackground.png",
                                       Building.SECTION_WIDTH,
                                       Building.SECTION_HEIGHT);

  this.m_floorSprite = new Sprite("images/floor.png",
                                  Building.FLOOR_WIDTH,
                                  Building.FLOOR_HEIGHT);

  this.m_wallSprite = new Sprite("images/wallThird.png",
                                  Building.WALL_WIDTH,
                                  Building.WALL_HEIGHT / Building.SECTIONS);

  this.m_width = 0;
  this.m_height = 0;

  this.EnablePhysics(physics, false);
  
  this.Load = function(file)
  {
    //When a building is created check if a file of the building plan has been
    //passed. If so load the building plan. If not create a single block
    //building which can then be developed.
    if(file != null)
    {
      //Load existing building plan.

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

            //this.m_sections[column][row].EnablePhysics(physics, true);
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
            new FloorSection(physics, this.m_floorSprite,
                             this.m_x + (floorX * Building.SECTION_WIDTH) + Building.WALL_WIDTH,
          this.m_y - (floorY * Building.SECTION_HEIGHT)));

          //this.m_floors[this.m_floors.length - 1].EnablePhysics(physics, true);
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

          //_wall.EnablePhysics(physics, true);
          this.m_bounds.AddChildBounds(_wall.GetBounds());
          this.m_walls.push(_wall);
        }
      }
    }
    else
    {
      //Create generic building.

      //Set up initial section.
      this.m_sections = new Array(1);
      this.m_sections[0] = new Array(1);
      this.m_sections[0][0] = new Section(physics, this.m_foregroundSprite,
                                          this.m_backgroundSprite,
                                          this.m_x + Building.WALL_WIDTH,
                                          this.m_y,
                                          Building.SECTION_WIDTH,
                                          Building.SECTION_HEIGHT);

      //this.m_sections[0][0].EnablePhysics(physics, true);
      this.m_bounds.AddChildBounds(m_sections[0][0].GetBounds());

      //Set up initial walls.
      this.m_walls = new Array();
      var _wall1 = new WallSection(physics, this.m_wallSprite, this.m_x, this.m_y);
      //_wall1.EnablePhysics(physics, true);
      this.m_bounds.AddChildBounds(_wall1.GetBounds());
      this.m_walls.push(_wall1);

      var _wall2 = new WallSection(physics, this.m_wallSprite,
                                   this.m_x + Building.WALL_WIDTH
                                   + Building.SECTION_WIDTH, this.m_y);
      //_wall2.EnablePhysics(physics, true);
      this.m_bounds.AddChildBounds(_wall2.GetBounds());
      this.m_walls.push(_wall2);

      //Set up initial floor section as ceiling set into initial sections.
      this.m_floors = new Array();
      var _floor = new FloorSection(physics, this.m_floorSprite,
                                    this.m_x + Building.WALL_WIDTH, this.m_y);
      //_floor.EnablePhysics(physics, true);
      this.m_bounds.AddChildBounds(_floor.GetBounds());
      this.m_floors.push(_floor);
    }
  }

  this.Update = function(dt)
  {
  /*	//Iterate through building array and update blocks if necessary.
	for(i = 0; i < m_width; i++)
    {
      for(j = 0; j < m_height; j++)
      {
		if(m_blocks[i][j].m_blockIntegrity <= 0
			&& j > 0)
        {
		  m_blocks[i][j - 1].m_type = BlockType.TopBlock;
		}
	  }
	}*/
  };
  
  this.Draw = function(context, screenX, screenY, scale)
  {
    if(this.m_sections != null)
	{
      //Get width of building.
      var _width = this.m_sections.length;

      for(i = 0; i < _width; i++)
      {
        //Get height of that column.
        var _height = this.m_sections[i].length;

        for(j = 0; j < _height; j++)
        {
          //Draw if a section in that space.
          if(this.m_sections[i][j] != null)
          {
            this.m_sections[i][j].Draw(context, screenX, screenY, scale);
          }
        }
      }
	}
	
	if(this.m_walls != null)
	{
      for(i = 0; i < this.m_walls.length; i++)
      {
        this.m_walls[i].Draw(context, screenX, screenY, scale);
      }
	}
	
	if(this.m_floors != null)
	{
      for(i = 0; i < this.m_floors.length; i++)
      {
        this.m_floors[i].Draw(context, screenX, screenY, scale);
      }
	}
    
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.strokeRect(this.m_bounds.m_left - screenX,
                       this.m_bounds.m_top - screenY,
                       this.m_bounds.m_width,
                       this.m_bounds.m_height);
  }
};
