//******************************
//Represents a single floor made up of a number of individual blocks.
//******************************
function Floor()
{
  //Holds the floor's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;

  //List of the blocks that make up the floor.
  this.m_blocks = new Array();


};

