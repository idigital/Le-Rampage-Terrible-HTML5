BuildingType = { GreyBuilding : 0,
                 BlueBuilding : 1,
                 GlassBuilding : 2
	       };
		   
Building.prototype = new GameObject();

function Building(physics, x, y, file)
{
  //Constants.
  Building.SECTION_WIDTH = 512;
  Building.SECTION_HEIGHT = 384;
  Building.WALL_WIDTH = 16;
  Building.WALL_HEIGHT = 384;
  Building.FLOOR_WIDTH = 512;
  Building.FLOOR_HEIGHT = 16;

  this.m_x = x;
  this.m_y = y;
  
  this.m_type = ObjectType.Building;

  //Holds the building's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;

  //A 2d array that holds the sections of the building.
  var m_sections;

  //Arrays that hold the wall and floor sections of the building.
  var m_walls;
  var m_floors;

  //Load the sprites required for the section's foreground, background, the
  //floor sprite and wall sprite.
  this.m_foregroundSprite = new Sprite("images/sectionForeground.png",
                                       Building.SECTION_WIDTH,
                                       Building.SECTION_HEIGHT);
  this.m_backgroundSprite = new Sprite("images/sectionBackground.png",
                                       Building.SECTION_WIDTH,
                                       Building.SECTION_HEIGHT);
  this.m_floorSprite = new Sprite("images/floor.png",
                                  Building.FLOOR_WIDTH,
                                  Building.FLOOR_HEIGHT);
  this.m_wallSprite = new Sprite("images/wall.png",
                                  Building.WALL_WIDTH,
                                  Building.WALL_HEIGHT);

  //When a building is created check if a file of the building plan has been
  //passed. If so load the building plan. If not create a single block
  //building which can then be developed.
  if(file != null)
  {
    //Load existing building plan.
    //TO_DO
  }
  else
  {
    //Create generic building.
    this.m_width = 0;//Building.SECTION_WIDTH + (Building.WALL_WIDTH * 2);
    this.m_height = 0;//Building.SECTION_HEIGHT;

    this.EnablePhysics(physics, false);

    //Set up initial section.
    m_sections = new Array(1);
    m_sections[0] = new Array(1);
    m_sections[0][0] = new Section(this.m_foregroundSprite,
                                   this.m_backgroundSprite,
                                   this.m_x + Building.WALL_WIDTH, this.m_y);

    m_sections[0][0].EnablePhysics(physics, true);
    this.m_bounds.AddChildBounds(m_sections[0][0].GetBounds());

    //Set up initial walls.
    m_walls = new Array();
    var _wall1 = new WallSection(this.m_wallSprite, this.m_x, this.m_y);
    _wall1.EnablePhysics(physics, true);
    this.m_bounds.AddChildBounds(_wall1.GetBounds());
    m_walls.push(_wall1);

    var _wall2 = new WallSection(this.m_wallSprite,
                                 this.m_x + Building.WALL_WIDTH
                                 + Building.SECTION_WIDTH, this.m_y);
    _wall2.EnablePhysics(physics, true);
    this.m_bounds.AddChildBounds(_wall2.GetBounds());
    m_walls.push(_wall2);
	
    //Set up initial floor section as ceiling set into initial sections.
    m_floors = new Array();
    var _floor = new FloorSection(this.m_floorSprite,
                                  this.m_x + Building.WALL_WIDTH, this.m_y);
    _floor.EnablePhysics(physics, true);
    this.m_bounds.AddChildBounds(_floor.GetBounds());
    m_floors.push(_floor);
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
  
  this.Draw = function(context, screenX, screenY)
  {
    //Get width of building.
    var _width = m_sections.length;

    for(i = 0; i < _width; i++)
    {
      //Get height of that column.
      var _height = m_sections[i].length;

      for(j = 0; j < _height; j++)
      {
        //Draw if a section in that space.
        if(m_sections[i][j] != null)
        {
          m_sections[i][j].Draw(context, screenX, screenY);
        }
      }
    }
	
    for(i = 0; i < m_walls.length; i++)
    {
      m_walls[i].Draw(context, screenX, screenY);
    }
	
    for(i = 0; i < m_floors.length; i++)
    {
      m_floors[i].Draw(context, screenX, screenY);
    }
    
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.strokeRect(this.m_bounds.m_left - screenX,
                       this.m_bounds.m_top - screenY,
                       this.m_bounds.m_right - screenX, 
                       this.m_bounds.m_bottom - screenY);
    
    context.fillStyle = "Black";
    context.fillText("Building Bounds Left:" + this.m_bounds.m_left, 10, 200);
    context.fillText("Building Bounds Top:" + this.m_bounds.m_top, 10, 220);
    context.fillText("Building Bounds Right:" + this.m_bounds.m_right, 10, 240);
    context.fillText("Building Bounds Bottom:" + this.m_bounds.m_bottom, 10, 260);
  }
};

