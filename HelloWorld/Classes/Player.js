Player.prototype = new GameObject();

function Player()
{
	this.m_velocity = new Vector(0,0);
	
	var m_onGround = false;
	var m_jumping = false;
	var m_crouching = false;
	var m_gravity = 2.0;
	var m_floorHeight = 20;
	var m_screenWidth = 600;
	var m_airDrag = 0.05;
	
	this.m_currentState;
	
	this.sprite = cc.Sprite.create("Resources/MonsterIdle.png");
	this.sprite.setAnchorPoint(cc.ccp(0.5, 0.5));
    //this.sprite.setPosition(cc.ccp(this.m_x - (this.m_width/2), this.m_y - (this.m_height/2)));
	
	this.Update = function()
	{
		if(this.m_y < m_floorHeight + this.m_height && m_onGround == false)
		{
			m_onGround = true;
			this.m_y = m_floorHeight + this.m_height;
			this.m_velocity.m_dx = 0;
			this.m_velocity.m_dy = 0;
		}
		
		if(this.m_x < 0)
		{
			this.m_x = 0;
			this.m_velocity.m_dx *= -0.2;
			this.m_velocity.m_dy *= 0.8;
		}
		
		if(this.m_x + this.m_width > m_screenWidth)
		{
			this.m_x = m_screenWidth - this.m_width;
			this.m_velocity.m_dx *= -0.2;
			this.m_velocity.m_dy *= 0.8;
		}

		if (m_onGround == false)
		{
			this.m_x += this.m_velocity.m_dx;
			this.m_y += this.m_velocity.m_dy;
			this.m_velocity.m_dy -= m_gravity;
			this.m_velocity.m_dy -= m_airDrag;
		}
		/*else if(m_onGround == true && m_crouching == false && m_jumping == false)
		{
			ChangeState(PlayerState.PlayerIdle);
		}*/
		
		if(m_onGround == true && m_jumping == true)
		{
			this.x += this.m_velocity.m_dx;
			this.y += this.m_velocity.m_dy;
			
			m_jumping = false;
			m_onGround = false;
		}
		
		this.m_bounds.Move(this.m_x, this.m_y);
		this.sprite.setPosition(cc.ccp(this.m_x + (this.m_width/2), this.m_y + (this.m_height/2)));
	};
	
	this.Jump = function(vX, vY)
	{
		if(m_onGround == true)
		{
			this.m_velocity.m_dx = vX;
			this.m_velocity.m_dy = vY;
		
			m_jumping = true;
			m_crouching = false;
			
			//ChangeState(PlayerState.PlayerJump);
		}
	}
	
	this.GetSprite = function()
	{
		return this.sprite;
	}
	
	return this;
};

Player.prototype.Move = function(x, y)
{
	this.m_x = x;
	this.m_y = y;
	this.sprite.setPosition(cc.ccp(this.m_x + (this.m_width/2), this.m_y + (this.m_height/2)));
};
