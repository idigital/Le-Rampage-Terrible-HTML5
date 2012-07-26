function Level(layer)
{
	var m_layer = layer;

	//Dragging variables.
	var m_dragging = false;
	var m_startX = 0;
	var m_startY = 0;
	var m_endX = 0;
	var m_endY = 0;
	var m_maxDrag = 30;
	
	//Objects in the game.	
	var m_character;
	var m_aim;
	var m_building1;
	var m_building2;
	var m_building3;
	
	var m_objective;
	
	var m_physics = new PhysicsHandler();
	
	m_character = new Player();
	m_character.Move(100,100);
	m_character.SetDimensions(46, 64);
	m_character.EnablePhysics(m_physics);
	
	m_layer.addChild(m_character.GetSprite(), 0);
		
	this.Update = function()
	{
		m_character.Update();
	
		m_physics.UpdatePhysics();
	}
	
	m_character.GetSprite().schedule(this.Update, 1 / 60);
	
	this.StartDrag = function(startX, startY)
	{
		var _bounds = m_character.GetBounds();
		
		if(_bounds.CheckForPointCollision(startX, startY) == true)
		{
			m_dragging = true;
			m_startX = startX;
			m_startY = startY;
			//m_character.Crouch();
		}
	}
	
	this.EndDrag = function(endX, endY)
	{
		if(m_dragging == true)
		{
			m_dragging = false;
			m_endX = endX;
			m_endY = endY;

			//var _origin = m_level.m_character.GetOrigin();
			
			var _diffX = m_endX;// = _origin.m_x - m_endX;
			var _diffY = m_endY;// = _origin.m_y - m_endY;
			
			m_character.Jump(_diffX / 5, _diffY / 5);
		}
	}
	
	this.UpdateDrag = function(newX, newY)
	{
		if(m_dragging == true)
		{
			m_endX = newX;
			m_endY = newY;
			
			/*var _origin:Vector = m_level.m_character.GetOrigin();
			
			var _diffX:Number = _origin.m_x - m_endX;
			var _diffY:Number = _origin.m_y - m_endY;
			
			m_level.m_aim.Move(	_origin.m_x + _diffX,
						_origin.m_y + _diffY);*/
		}
	}
};


