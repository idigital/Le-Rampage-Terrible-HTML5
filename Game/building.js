BuildingType = { GreyBuilding : 0,
                 BlueBuilding : 1,
		 GlassBuilding : 2
	       };

function Building(physics, x, y, file)
{
  //Constants.
  Building.SECTION_WIDTH = 512;
  Building.SECTION_HEIGHT = 384;

  this.m_x = x;
  this.m_y = y;

  //Holds the building's overall bounding box in order to make collision
  //detection more efficient.
  var m_bounds;

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
                                  FloorSection.FLOOR_WIDTH,
                                  FloorSection.FLOOR_HEIGHT);
  this.m_wallSprite = new Sprite("images/wall.png",
                                  WallSection.WALL_WIDTH,
                                  WallSection.WALL_HEIGHT);

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

    //Set up initial section.
    m_sections = new Array(1);
    m_sections[0] = new Array(1);
    m_sections[0][0] = new Section(this.m_foregroundSprite,
                                   this.m_backgroundSprite,
                                   this.m_x, this.m_y);

    m_bounds = new BoundingBox(null, m_sections.m_x, m_sections.m_y,
                               Building.SECTION_WIDTH,
                               Building.SECTION_HEIGHT);

    //
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
  }
};

