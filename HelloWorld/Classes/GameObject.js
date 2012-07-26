function GameObject()
{
	this.m_x = 0;
	this.m_y = 0;
	this.m_width = 0;
	this.m_height = 0;
	
	this.m_velocity;
	this.m_bounds;
		
	this.SetDimensions = function(width, height)
	{
		this.m_width = width;
		this.m_height = height;
	}
	
	this.GetBounds = function()
	{
		//returns bounding box.
		return this.m_bounds;
	}
	
	this.EnablePhysics = function(physics)
	{
		var self = this;
		this.m_bounds = physics.CreateBoundingBox(self);
	}
	
	this.GetOrigin = function()
	{
		return new Vector(this.m_x + (this.m_width/2),
							this.m_y + (this.m_height/2));
	}
	
	return this;
};

GameObject.prototype.Move = function(x, y)
{
	this.m_x = x;
	this.m_y = y;
};

GameObject.prototype.HandleCollision = function(collision)
{

};