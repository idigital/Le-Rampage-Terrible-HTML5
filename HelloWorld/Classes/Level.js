function Level(layer)
{
	var m_layer = layer;

	//Dragging variables.
	var m_dragging = false;
	var m_startX = 0;
	var m_startY = 0;
	var m_endX = 0;
	var m_endY = 0;
	var m_diffX = 0;
	var m_diffY = 0;
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
	
	var m_aimPos = new Vector(m_character.m_x + (m_character.m_width/2),
							  m_character.m_y + (m_character.m_height/2));
	this.m_aimSprite = cc.Sprite.create("Resources/Aim.png");
	this.m_aimSprite.setPosition(cc.ccp(m_aimPos.m_dx, m_aimPos.m_dy));
	m_layer.addChild(this.m_aimSprite, 0);
	
	m_building1 = new Building(m_layer, m_physics, 400, 100, BuildingType.GreyBuilding);
	
	var label1 = cc.LabelTTF.create("Test", "Arial", 12);
    label1.setPosition(cc.ccp(40, 300));
    m_layer.addChild(label1, 0);
	
	var label2 = cc.LabelTTF.create("Test", "Arial", 12);
    label2.setPosition(cc.ccp(40, 280));
    m_layer.addChild(label2, 0);
	
	var label3 = cc.LabelTTF.create("Test", "Arial", 12);
    label3.setPosition(cc.ccp(40, 260));
    m_layer.addChild(label3, 0);
	
	var label4 = cc.LabelTTF.create("Test", "Arial", 12);
    label4.setPosition(cc.ccp(40, 240));
    m_layer.addChild(label4, 0);
	
	var label5 = cc.LabelTTF.create("Test", "Arial", 12);
    label5.setPosition(cc.ccp(40, 220));
    m_layer.addChild(label5, 0);
	
	var label6 = cc.LabelTTF.create("Test", "Arial", 12);
    label6.setPosition(cc.ccp(40, 200));
    m_layer.addChild(label6, 0);
		
	this.Update = function()
	{
		m_character.Update();
	
		m_physics.UpdatePhysics();
		
		label1.setString("startX: " + m_startX);
		label2.setString("startY: " + m_startY);
		label3.setString("endX:   " + m_endX);
		label4.setString("endY:   " + m_endY);
		label5.setString("diffX:  " + m_diffX);
		label6.setString("diffY:  " + m_diffY);
		
		if(m_dragging == false)
		{
			var _origin = m_character.GetOrigin();
		
			m_aimPos.m_dx = _origin.m_dx;
			m_aimPos.m_dy = _origin.m_dy;
			
			//this.m_aimSprite.setPosition(cc.ccp(m_aimPos.m_dx, m_aimPos.m_dy));
		}
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

			var _origin = m_character.GetOrigin();
			
			_diffX = _origin.m_dx - m_endX;
			_diffY = _origin.m_dy - m_endY;
			
			m_character.Jump(_diffX / 5, _diffY / 5);
		}
	}
	
	this.UpdateDrag = function(newX, newY)
	{
		if(m_dragging == true)
		{
			m_endX = newX;
			m_endY = newY;
			
			var _origin = m_character.GetOrigin();
			
			m_diffX = _origin.m_dx - m_endX;
			m_diffY = _origin.m_dy - m_endY;
			
			m_aimPos.m_dx = _origin.m_dx + m_diffX;
			m_aimPos.m_dy = _origin.m_dy + m_diffY;
			
			this.m_aimSprite.setPosition(cc.ccp(m_aimPos.m_dx, m_aimPos.m_dy));
		}
	}
};


