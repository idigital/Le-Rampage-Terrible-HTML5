function PhysicsHandler()
{
  //An array to hold each object in the level's bounding box.
  var m_objects = new Array();

  this.CreateBoundingBox = function(gameObject)
  {
    var _bounds = new BoundingBox(gameObject,
                                  gameObject.m_x,
                                  gameObject.m_y,
                                  gameObject.m_width,
                                  gameObject.m_height);

    m_objects.push(_bounds);

    return _bounds;		
  }

  //Checks all bounding boxes against each other for collisions and then passes
  //the details of the bounding box hit and it's owners type to the owner of the
  //other bounding box.
  this.UpdatePhysics = function()
  {
    for(i = 0; i < m_objects.length; i++)
    {
      //Compare current bounds agains all other bounds left in array.
      for(j = i + 1; j < m_objects.length; j++)
      {
        var _obj1 = m_objects[i];
        var _obj2 = m_objects[j];

        //Check if the two objects collide.
        if(_obj1.CheckForCollision(_obj2) == true)
        {
          //Get collision details and pass it first object to handle.
          var _collisionDetails = _obj1.GetCollisionDetails(_obj2);
		  
		  _obj1.m_parent.AddCollision(_collisionDetails);
		  
          //_obj1.m_parent.HandleCollision(_collisionDetails);

          //Invert collision details and pass to other object.
          //var _collisionInvert = _collisionDetails.Invert(_obj1);
          //_obj2.m_parent.HandleCollision(_collisionInvert);
        }
      }
    }
	
	for(i = 0; i < m_objects.length; i++)
    {
		m_objects[i].m_parent.UpdatePhysics();
	}
  }
};

