WallSection.prototype = new GameObject();

//****************************************************************************
//Represents a single wall made up of a number of individual blocks.
//****************************************************************************
function WallSection(physics, image, x, y)
{
  //Constants.
  WallSection.WALL_WIDTH = 8;
  WallSection.WALL_HEIGHT = 192;
  WallSection.STARTING_HEALTH = 1;
  WallSection.SECTIONS = 3;

  this.m_image = image;
  this.m_x = x;
  this.m_y = y;
  this.m_width = WallSection.WALL_WIDTH;
  this.m_height = WallSection.WALL_HEIGHT;

  //Holds the walls's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;
  this.EnablePhysics(physics, true);

  this.m_type = ObjectType.Wall;

  //List of the blocks that make up the wall.
  this.m_blocks = new Array(WallSection.SECTIONS);

  for(section = 0; section < WallSection.SECTIONS; section++)
  {
    var _sectionHeight = WallSection.WALL_HEIGHT / WallSection.SECTIONS;
    var _block = new Block(this, this.m_x,
                           this.m_y + (section * _sectionHeight),
                           WallSection.WALL_WIDTH,
                           _sectionHeight);

    _block.m_blockIntegrity = WallSection.STARTING_HEALTH;

    this.m_bounds.AddChildBounds(_block.GetBounds());
 
    this.m_blocks[section] = _block;
  }

  this.Draw = function(context, screenX, screenY)
  {
    if(this.m_blocks[0].m_blockIntegrity > 0)
    {
      this.m_image.Draw(context, this.m_x, this.m_y, screenX, screenY);

      context.lineWidth = 1;
      context.strokeStyle = 'green';
      context.strokeRect(this.m_x - screenX, this.m_y - screenY,
                         WallSection.WALL_WIDTH, WallSection.WALL_HEIGHT);
						   
      context.fillStyle = 'green';
      context.fillText(this.m_blocks[0].m_blockIntegrity, this.m_x - screenX, this.m_y - screenY);
    }
  }
};
