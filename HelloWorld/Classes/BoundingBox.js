function BoundingBox(gameObject, x, y, width, height)
{

	this.m_parent = gameObject;
	
	//Dimensions.
	this.m_width = width;
	this.m_height = height;
	
	//Edges. Stored as single number.
	this.m_top = y;
	this.m_left = x;
	this.m_right = x + width;
	this.m_bottom = y + height;
	
	//Corners. Stored as Vectors.
	this.m_topLeft = new Vector(this.m_left, this.m_top);
	this.m_topRight = new Vector(this.m_right, this.m_top);
	this.m_bottomLeft = new Vector(this.m_left, this.m_bottom);
	this.m_bottomRight = new Vector(this.m_right, this.m_bottom);

	//Returns true if a point falls inside the bounding box.
	this.CheckForPointCollision = function(pointX, pointY)
	{
		if((pointX >= this.m_left)
			&& (pointX <= this.m_right)
			&& (pointY >= this.m_top)
			&& (pointY <= this.m_bottom))
		{
			return true;
		}
		
		return false;
	}
	
	//Checks whether a bounding box intersects this bounding box.
	this.CheckForCollision = function(target)
	{
	
	}
	
	//Returns details about collision between two bounding boxes.
	this.GetCollisionDetails = function(target)
	{
	
	}
	
	this.Move = function(x, y)
	{
		this.m_top = y;
		this.m_left = x;
		this.m_right = x + this.m_width;
		this.m_bottom = y + this.m_height;
		
		this.m_topLeft.m_x = this.m_left;
		this.m_topLeft.m_y = this.m_top;
		this.m_topRight.m_x = this.m_right;
		this.m_topRight.m_y = this.m_top;
		this.m_bottomLeft.m_x = this.m_left;
		this.m_bottomLeft.m_y = this.m_bottom;
		this.m_bottomRight.m_x = this.m_right;
		this.m_bottomRight.m_y = this.m_bottom;
	}
};
