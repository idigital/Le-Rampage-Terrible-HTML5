function PhysicsHandler()
{
  //An array to hold each object in the level's bounding box.
  var m_objects = new Array();

  this.CreateBoundingBox = function(gameObject, hasParent)
  {
    var _bounds = new BoundingBox(gameObject,
                                  gameObject.m_x,
                                  gameObject.m_y,
                                  gameObject.m_width,
                                  gameObject.m_height);

    //Add to array of objects in level if bounds does not have parent bounds.
    //If it has parent bounds the parent will check it's collision during
    //physics update.
    if(hasParent == false)
    {
      m_objects.push(_bounds);
    }

    return _bounds;		
  }

  //Checks all bounding boxes against each other for collisions and then passes
  //the details of the bounding box hit and it's owners type to the owner of the
  //other bounding box.
  this.UpdatePhysics = function()
  {
    //Array to be passed to embedded bounding boxes to return all collisions
	//that occur within embedded bounding boxes.
    var _collisionDetails = new Array()
	
    for(i = 0; i < m_objects.length; i++)
    {
      //Clear array ready for next object.
      _collisionDetails = [];
      
      //Compare current bounds agains all other bounds left in array.
      for(j = i + 1; j < m_objects.length; j++)
      {
        var _obj1 = m_objects[i];
        var _obj2 = m_objects[j];

        //Check if the two objects collide.
        if(_obj1.CheckForCollision(_obj2) == true)
        {
          //Get collision details and pass it first object to handle.
          _collisionDetails = _obj1.GetCollisionDetails(_obj2);

          if(_collisionDetails.length > 0)
          {
            for(collision = 0;
                collision < _collisionDetails.length;
                collision++)
            {
              _obj1.m_parent.AddCollision(_collisionDetails[collision]);
            }
          }
        }
      }
    }

    for(i = 0; i < m_objects.length; i++)
    {
      m_objects[i].m_parent.UpdatePhysics();
    }
  }
};

