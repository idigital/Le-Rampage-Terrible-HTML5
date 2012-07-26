BlockType = { SolidBlock : 0,
			  BreakableBlock : 1,
			  TopBlock : 2,
			  BottomBlock : 3,
			  GrabBlock : 4,
			  PassableBlock : 5,
			  PassableBaseBlock : 6
			}
			
BlockFace = { Top : 0,
			  Left : 1,
			  Right : 2,
			  Bottom : 3
			}

Block.prototype = new GameObject();

function Block(buildingType, blockType, x, y, width, height)
{
	this.m_type = blockType;
	
	this.m_x = x;
	this.m_y = y;
	this.m_width = width;
	this.m_height = height;
	
	this.m_sprite;
		
	if(this.m_type == BlockType.BottomBlock)
	{
		this.m_sprite = cc.Sprite.create("Resources/building 1 base.png");
	}
	else if(this.m_type == BlockType.SolidBlock)
	{	
		this.m_sprite = cc.Sprite.create("Resources/building 1 windows.png");
	}
	else if(this.m_type == BlockType.TopBlock)
	{
		this.m_sprite = cc.Sprite.create("Resources/building 1 windows.png");
	}
	
	this.m_sprite.setAnchorPoint(cc.ccp(0, 1));
	this.m_sprite.setPosition(cc.ccp(this.m_x, this.m_y));
	
	this.GetSprite = function()
	{
		return this.m_sprite;
	}
}