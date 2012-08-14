//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

WallSection.prototype = new GameObject();

//****************************************************************************
//Represents a single wall made up of a number of individual blocks.
//****************************************************************************
function WallSection(physics, image, x, y)
{
  //Constants.
  WallSection.WALL_WIDTH = 8;
  WallSection.WALL_HEIGHT = 64;
  WallSection.STARTING_HEALTH = 1;
  WallSection.SECTIONS = 1;

  this.m_image = image;
  this.m_x = x;
  this.m_y = y;
  this.m_width = WallSection.WALL_WIDTH;
  this.m_height = WallSection.WALL_HEIGHT;

  //Holds the walls's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;
  this.EnablePhysics(physics, false);

  this.m_type = ObjectType.Wall;

  //List of the blocks that make up the wall.
  this.m_blocks = new Array(WallSection.SECTIONS);
  //List containing a boolean value associated with each block denoting whether
  //that block is still intact.
  this.m_blocksIntact = new Array(WallSection.SECTIONS);

  for(section = 0; section < WallSection.SECTIONS; section++)
  {
    var _sectionHeight = WallSection.WALL_HEIGHT / WallSection.SECTIONS;

    var _block = new Block(null,
                           BlockType.WallBlock,
                           this.m_x,
                           this.m_y + (section * _sectionHeight),
                           WallSection.WALL_WIDTH,
                           _sectionHeight);

    _block.m_blockIntegrity = WallSection.STARTING_HEALTH;

    _block.EnablePhysics(physics, false, false);
    //this.m_bounds.AddChildBounds(_block.GetBounds());
 
    this.m_blocks[section] = _block;

    this.m_blocksIntact[section] = true;
  }

  //***************************************************************************
  //
  //***************************************************************************
  this.DetermineSectionsHit = function(bounds)
  {
    var _sectionsHit = new Array(WallSection.SECTIONS);

    //Use passed in bounds to check which block sections, that are still intact
    //, have been collided with.
    for(section = 0; section < WallSection.SECTIONS; section++)
    {
      if(this.m_blocksIntact[section] == true)
      {
        if(this.m_blocks[section].GetBounds().CheckForCollision(bounds) == true)
        {
          //Section hit.
          _sectionsHit[section] = true;
          this.m_blocksIntact[section] = false;
        }
        else
        {
          //Section not hit.
          _sectionsHit[section] = false;
        }
      }
    }

    //Return an array of sections that have been hit.
    return _sectionsHit;
  };

  //***************************************************************************
  //
  //***************************************************************************
  this.Draw = function(context, screenX, screenY, scale)
  {
    for(block = 0; block < this.m_blocks.length; block++)
    {
      //if(this.m_blocks[block].m_blockIntegrity > 0)
      if(this.m_blocksIntact[block] == true)
      {
        this.m_image.Draw(context, this.m_x, this.m_y + ((WallSection.WALL_HEIGHT / WallSection.SECTIONS) * block), screenX, screenY, scale);

		if(Game.EDIT_MODE == true)
		{
          context.lineWidth = 1;
          context.strokeStyle = 'green';
          context.strokeRect(this.m_x - screenX, this.m_y + ((WallSection.WALL_HEIGHT / WallSection.SECTIONS) * block) - screenY,
                             WallSection.WALL_WIDTH, WallSection.WALL_HEIGHT / WallSection.SECTIONS);
        }
      }
    }
  }
};

