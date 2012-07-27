BuildingType = { GreyBuilding : 0,
				 BlueBuilding : 1,
				 GlassBuilding : 2
				}

function Building(layer, physics, x, y, w, h, buildingType)
{
	var m_width = w;
	var m_height = h;
	var m_blocks = new Array(w);
	for(i = 0; i < m_blocks.length; i ++)
	{
		m_blocks[i] = new Array(h);
	}
	
	cc.SpriteFrameCache.sharedSpriteFrameCache().addSpriteFrame('Resources/blockFrames.png', "blockFrames");
	
	for(i = 0; i < m_height; i++)
	{
		var _block = new Block(buildingType, BlockType.SolidBlock, x, y + 0, 334, 118 - 1);
		_block.EnablePhysics(physics);
		layer.addChild(_block.GetSprite(), 0);
		
		var _block = new Block(buildingType, BlockType.SolidBlock, x, y + 118, 334, 118 - 1);
		_block.EnablePhysics(physics);
		layer.addChild(_block.GetSprite(), 0);
		
		var _block = new Block(buildingType, BlockType.TopBlock, x, y + 236, 334, 118 - 1);
		_block.EnablePhysics(physics);
		layer.addChild(_block.GetSprite(), 0);
		
		m_blocks.push(_block);
	}
};