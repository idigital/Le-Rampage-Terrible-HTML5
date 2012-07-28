BlockType = { SolidBlock : 0,
              BreakableBlock : 1,
              TopBlock : 2,
              BottomBlock : 3,
              GrabBlock : 4,
              PassableBlock : 5,
              PassableBaseBlock : 6
            };
			
BlockFace = { Top : 0,
              Left : 1,
              Right : 2,
              Bottom : 3
            };

Block.prototype = new GameObject();

function Block(buildingType, blockType, x, y, width, height)
{
  this.m_type = blockType;

  this.m_x = x;
  this.m_y = y;
  this.m_width = width;
  this.m_height = height;

  this.m_blockIntegrity = 100;
};

