BuildingType = { GreyBuilding : 0,
				 BlueBuilding : 1,
				 GlassBuilding : 2
				}

function Building(layer, physics, x, y, buildingType)
{
	var m_height = 3;
	var m_blocks = new Array();

	for(i = 0; i < m_height; i++)
	{
		var _block = new Block(buildingType, BlockType.SolidBlock, x, y + (118 * i), 334, 118 - 1);
		_block.EnablePhysics(physics);
		layer.addChild(_block.GetSprite(), 0);
		
		m_blocks.push(_block);
	}
};