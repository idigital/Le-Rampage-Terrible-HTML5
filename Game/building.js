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

  this.sprite = new AnimatedSprite("images/blockFrames.png", 64, 64, 3);

  for(i = 0; i < m_width; i++)
  {
    for(j = 0; j < m_height; j++)
    {
      var _block;

      if(j != m_height - 1)
      {
        _block = new Block(buildingType, BlockType.SolidBlock,
                           x + (i * 64), y - ((j + 1) * 64), 64, 64);
      }
      else
      {
        _block = new Block(buildingType, BlockType.TopBlock,
                           x + (i * 64), y - ((j + 1) * 64), 64, 64);
      }

      _block.EnablePhysics(physics);

      m_blocks[i][j] = _block;
    }
  }

  this.Draw = function(context, screenX, screenY)
  {
    for(i = 0; i < m_width; i++)
    {
      for(j = 0; j < m_height; j++)
      {
        var _frame;
        if(m_blocks[i][j].m_blockIntegrity == 3)
        {
          _frame = 0;
        }
        else if(m_blocks[i][j].m_blockIntegrity < 3
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

