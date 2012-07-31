FloorSection.prototype = new GameObject();

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

  this.m_type = BlockType.FloorBlock;

  //List of the blocks that make up the floor.
  this.m_blocks = new Array();

  var _block = new Block(this, this.m_x, this.m_y, FloorSection.FLOOR_WIDTH,
						 FloorSection.FLOOR_HEIGHT);
  
  this.m_blocks.push(_block);
  
  this.Draw = function(context, screenX, screenY)
  {
    this.m_image.Draw(context, this.m_x, this.m_y, screenX, screenY);

    context.lineWidth = 1;
    context.strokeStyle = 'green';
    context.strokeRect(this.m_x - screenX, this.m_y - screenY,
                       FloorSection.FLOOR_WIDTH, FloorSection.FLOOR_HEIGHT);
  }
};

