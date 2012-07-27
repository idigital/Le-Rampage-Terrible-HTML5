function Vector(dx, dy)
{
	this.m_dx = dx;
	this.m_dy = dy;
	
	return this;
};

this.Add = function(vector)
{
	this.m_dx += vector.m_dx;
	this.m_dy += vector.m_dy;
}

this.Average = function(vector)
{
	this.m_dx = (this.m_dx + vector.m_dx) / 2;
	this.m_dy = (this.m_dy + vector.m_dy) / 2;
}