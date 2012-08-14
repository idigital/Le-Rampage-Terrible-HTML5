//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

ObjectType = { Player : "player",
               Building : "building",
               Wall : "wall",
               Floor : "floor",
               Section : "section",
               Finish : "finish"
};

function GameObject()
{
  this.m_x = 0;
  this.m_y = 0;
  this.m_width = 0;
  this.m_height = 0;

  this.m_currentVelocity;

  //Stores the resultant currentVelocity of all physics collisions.
  this.m_physicsVelocity;

  this.m_bounds;

  this.m_type;
  
  //Array to store collisions each physics update.
  this.m_collisions = new Array();

  this.SetDimensions = function(width, height)
  {
    this.m_width = width;
    this.m_height = height;
  }

  this.GetBounds = function()
  {
    //Returns bounding box.
    return this.m_bounds;
  }

  this.EnablePhysics = function(physics, hasParent, addToWorld)
  {
    var self = this;
    this.m_bounds = physics.CreateBoundingBox(self, hasParent, addToWorld);
  }

  this.GetOrigin = function()
  {
    return new Vector(this.m_x + (this.m_width/2),
    this.m_y + (this.m_height/2));
  }
  
  this.AddCollision = function(collision)
  {
	this.m_collisions.push(collision);
  }

  return this;
};

GameObject.prototype.Move = function(x, y)
{
  this.m_x = x;
  this.m_y = y;
  this.m_bounds.Move(this.m_x, this.m_y);
};

GameObject.prototype.Draw = function(context, screenX, screenY, scale)
{

};

GameObject.prototype.HandleCollision = function(collision)
{

};

GameObject.prototype.UpdatePhysics = function()
{

};

