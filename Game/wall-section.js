//*****************************
//Represents a single wall made up of a number of individual blocks.
//*****************************
function WallSection(image, x, y)
{
  //Constants.
  WallSection.WALL_WIDTH = 16;
  WallSection.WALL_HEIGHT = 384;

  this.m_image = image;
  this.m_x = x;
  this.m_y = y;

  //Holds the walls's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;

  //List of the blocks that make up the wall.
  this.m_blocks = new Array();


};

