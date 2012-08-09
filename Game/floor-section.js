FloorSection.prototype = new GameObject();

//****************************************************************************
//Represents a single floor made up of a number of individual blocks.
//****************************************************************************
function FloorSection(physics, floorImage, floorBrokenImage, x, y)
{
  //Constants.
  FloorSection.FLOOR_WIDTH = 256;
  FloorSection.FLOOR_HEIGHT = 8;
  FloorSection.STARTING_HEALTH = 1;
  FloorSection.FORCE_TO_MOVE_DOWN_A_FLOOR = 2;
  FloorSection.FORCE_TO_MOVE_UP_A_FLOOR = 1;

  this.m_floorImage = floorImage;
  this.m_floorBrokenImage = floorBrokenImage;
  this.m_x = x;
  this.m_y = y;
  this.m_width = FloorSection.FLOOR_WIDTH;
  this.m_height = FloorSection.FLOOR_HEIGHT;

  //Holds the floor's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;
  this.EnablePhysics(physics, false);

  this.m_type = ObjectType.Floor;

  //List of the blocks that make up the floor.
  this.m_block = new Block(this, this.m_x, this.m_y,
                           FloorSection.FLOOR_WIDTH,
                           FloorSection.FLOOR_HEIGHT);

  this.m_block.m_blockIntegrity = FloorSection.STARTING_HEALTH;

  this.m_bounds.AddChildBounds(this.m_block.GetBounds());

  this.Draw = function(context, screenX, screenY, scale)
  {
    if(this.m_block.m_blockIntegrity > 0)
    {
      this.m_floorImage.Draw(context, this.m_x, this.m_y,
                             screenX, screenY, scale);
    }
    else
    {
      this.m_floorBrokenImage.Draw(context, this.m_x, this.m_y,
                                   screenX, screenY, scale);
    }

	if(Game.EDIT_MODE == true)
	{
      context.lineWidth = 1;
      context.strokeStyle = 'green';
      context.strokeRect(this.m_x - screenX, this.m_y - screenY,
                       FloorSection.FLOOR_WIDTH, FloorSection.FLOOR_HEIGHT);
    }				   
  }
};

