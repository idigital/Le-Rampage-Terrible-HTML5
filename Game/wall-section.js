//*****************************
//Represents a single wall made up of a number of individual blocks.
//*****************************
function Wall()
{
  //Holds the walls's overall bounding box in order to make collision
  //detection more efficient.
  this.m_bounds;

  //List of the blocks that make up the wall.
  this.m_blocks = new Array();


};

