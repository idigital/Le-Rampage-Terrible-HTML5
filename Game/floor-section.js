//******************************
//Represents a single floor made up of a number of individual blocks.
//******************************
function FloorSection(image, x, y)
{
  //Constants.
  FloorSection.FLOOR_WIDTH = 512;
  FloorSection.FLOOR_HEIGHT = 16;

  this.m_image = image;
  this.m_x = x;
  this.m_y = y;

  //Holds the floor's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;

  //List of the blocks that make up the floor.
  this.m_blocks = new Array();


};

