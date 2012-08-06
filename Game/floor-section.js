FloorSection.prototype = new GameObject();

//****************************************************************************
//Represents a single floor made up of a number of individual blocks.
//****************************************************************************
function FloorSection(physics, image, x, y)
{
  //Constants.
  FloorSection.FLOOR_WIDTH = 256;
  FloorSection.FLOOR_HEIGHT = 8;
  FloorSection.STARTING_HEALTH = 1;

  this.m_image = image;
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
      this.m_image.Draw(context, this.m_x, this.m_y, screenX, screenY, scale);

      context.lineWidth = 1;
      context.strokeStyle = 'green';
      context.strokeRect(this.m_x - screenX, this.m_y - screenY,
                         FloorSection.FLOOR_WIDTH, FloorSection.FLOOR_HEIGHT);
						   
      context.fillStyle = 'green';
      context.fillText(this.m_block.m_blockIntegrity,
                       this.m_x - screenX, this.m_y - screenY);
    }
  }
};

