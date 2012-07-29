BuildingType = { GreyBuilding : 0,
                 BlueBuilding : 1,
		 GlassBuilding : 2
	       };

function Building(physics, x, y, w, h, buildingType)
{
  var m_width = w;
  var m_height = h;

  var m_blocks = new Array(w);

  for(i = 0; i < m_blocks.length; i++)
  {
    m_blocks[i] = new Array(h);
  }

  //this.sprite = new AnimatedSprite("images/blockFrames.png", 64, 64, 3);
  //this.sprite = new AnimatedSprite("images/damage.png", 213, 128, 1);
  //this.sprite = new AnimatedSprite("images/building-blocks.png", 320, 128, 4);
  this.sprite = new AnimatedSprite("images/damageExample3.png", 60, 36, 2);

  for(i = 0; i < m_width; i++)
  {
    for(j = 0; j < m_height; j++)
    {
      var _block;

      if(j != m_height - 1)
      {
        _block = new Block(buildingType, BlockType.SolidBlock,
                           x + (i * 60), y - ((j + 1) * 36), 60, 36);
      }
      else
      {
        _block = new Block(buildingType, BlockType.TopBlock,
                           x + (i * 60), y - ((j + 1) * 36), 60, 36);
      }

      _block.EnablePhysics(physics);

      m_blocks[i][j] = _block;
    }
  }

  this.Update = function(dt)
  {
	//Iterate through building array and update blocks if necessary.
	for(i = 0; i < m_width; i++)
    {
      for(j = 0; j < m_height; j++)
      {
		if(m_blocks[i][j].m_blockIntegrity <= 0
			&& j > 0)
        {
		  m_blocks[i][j - 1].m_type = BlockType.TopBlock;
		}
	  }
	}
  };
  
  this.Draw = function(context, screenX, screenY)
  {
    for(i = 0; i < m_width; i++)
    {
      for(j = 0; j < m_height; j++)
      {
        var _frame;
        if(m_blocks[i][j].m_blockIntegrity == 2)
        {
          _frame = 0;
        }
        else if(m_blocks[i][j].m_blockIntegrity < 2
                && m_blocks[i][j].m_blockIntegrity >= 1)
        {
          _frame = 1;
        }
        else if(m_blocks[i][j].m_blockIntegrity < 1)
        {
          _frame = 2;
        }

        this.sprite.DrawFrame(context, _frame,
                              m_blocks[i][j].m_x, m_blocks[i][j].m_y,
                              screenX, screenY);

        m_blocks[i][j].m_bounds.Draw(context, screenX, screenY);
      }
    }
  }
};

