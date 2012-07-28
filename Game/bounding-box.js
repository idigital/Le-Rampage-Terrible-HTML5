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
    if(target.CheckForPointCollision(this.m_topLeft.m_dx,
                                     this.m_topLeft.m_dy) == true
      || target.CheckForPointCollision(this.m_topRight.m_dx,
                                       this.m_topRight.m_dy) == true
      || target.CheckForPointCollision(this.m_bottomLeft.m_dx,
                                       this.m_bottomLeft.m_dy) == true
      || target.CheckForPointCollision(this.m_bottomRight.m_dx,
                                       this.m_bottomRight.m_dy) == true)
    {
      return true;
    }

    return false;
  }

  //Returns details about collision between two bounding boxes.
  this.GetCollisionDetails = function(target)
  {
    var _collisionDetails = new CollisionStructure();
    _collisionDetails.m_objHit = target.m_parent;

    //Check right against left.
    if( this.m_right > target.m_left
        && this.m_right < target.m_right
        && this.m_top > (target.m_top - this.m_height)
        && this.m_bottom < (target.m_bottom + this.m_height))
    {
      _collisionDetails.left = true;
    }

    //Check left against right.
    if( this.m_left < target.m_right
        && this.m_left > target.m_left
        && this.m_top > (target.m_top - this.m_height)
        && this.m_bottom < (target.m_bottom + this.m_height))
    {
      _collisionDetails.right = true;
    }

    //Check bottom against top.
    if( this.m_bottom > target.m_top
        && this.m_bottom < target.m_bottom
        && this.m_left > (target.m_left - this.m_width)
        && this.m_right < (target.m_right + this.m_width))
    {
      _collisionDetails.top = true;
    }

    //Check top against bottom.
    if( this.m_top < target.m_bottom
        && this.m_top > target.m_top
        && this.m_left > (target.m_left - this.m_width)
        && this.m_right < (target.m_right + this.m_width))
    {
      _collisionDetails.bottom = true;
    }

    //***************************************************
    //Check for corner collisions and resolve.
    //***************************************************

    var _dx = 0;
    var _dy = 0;

    if(_collisionDetails.left == true && _collisionDetails.top == true)
    {
      //Check overlap and determine which is overlapped more.
      _dx = this.m_right - target.m_left;
      _dy = this.m_bottom - target.m_top;

      if(_dx >= _dy)
      {
        //Hits more of top side. Set left to false.
        _collisionDetails.left = false;
      }
      else if (_dy > _dx)
      {
        //Hits more of left side. Set top to false.
        _collisionDetails.top = false;
      }
    }
    else if(_collisionDetails.right == true && _collisionDetails.top == true)
    {
      //Check overlap and determine which is overlapped more.
      _dx = target.m_right - this.m_left;
      _dy = this.m_bottom - target.m_top;

      if(_dx >= _dy)
      {
        //Hits more of top side. Set right to false.
        _collisionDetails.right = false;
      }
      else if (_dy > _dx)
      {
        //Hits more of right side. Set top to false.
        _collisionDetails.top = false;
      }
    }

    if(_collisionDetails.left == true && _collisionDetails.bottom == true)
    {
      //Check overlap and determine which is overlapped more.
      _dx = this.m_right - target.m_left;
      _dy = target.m_bottom - this.m_top;

      if(_dx >= _dy)
      {
        //Hits more of bottom side. Set left to false.
        _collisionDetails.left = false;
      }
      else if (_dy > _dx)
      {
        //Hits more of left side. Set bottom to false.
        _collisionDetails.bottom = false;
      }								 
    }
    else if(_collisionDetails.right == true && _collisionDetails.bottom == true)
    {
      //Check overlap and determine which is overlapped more.
      _dx = target.m_right - this.m_left;
      _dy = target.m_bottom - this.m_top;

      if(_dx >= _dy)
      {
        //Hits more of bottom side. Set right to false.
        _collisionDetails.right = false;
      }
      else if (_dy > _dx)
      {
        //Hits more of right side. Set bottom to false.
        _collisionDetails.bottom = false;
      }
    }

    return _collisionDetails;
  }

  this.Move = function(x, y)
  {
    this.m_top = y;
    this.m_left = x;
    this.m_right = x + this.m_width;
    this.m_bottom = y + this.m_height;

    this.m_topLeft.m_dx = this.m_left;
    this.m_topLeft.m_dy = this.m_top;
    this.m_topRight.m_dx = this.m_right;
    this.m_topRight.m_dy = this.m_top;
    this.m_bottomLeft.m_dx = this.m_left;
    this.m_bottomLeft.m_dy = this.m_bottom;
    this.m_bottomRight.m_dx = this.m_right;
    this.m_bottomRight.m_dy = this.m_bottom;
  }

  this.Draw = function(context, screenX, screenY)
  {
    context.lineWidth = 1;
    context.strokeStyle = 'green';
    context.strokeRect(this.m_left - screenX, this.m_top - screenY,
                       this.m_width, this.m_height);
  }
};
