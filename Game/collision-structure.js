//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

function CollisionStructure()
{
  this.m_objHit;
	
  //Sides hit.
  this.top = false;
  this.left = false;
  this.right = false;
  this.bottom = false;

  this.Invert = function(objHit)
  {
    var _invertedCollision = new CollisionStructure();

    _invertedCollision.m_objHit = objHit.m_parent;

    if(this.top == true)
    {
      _invertedCollision.top = false;
      _invertedCollision.bottom = true;
    }

    if(this.left == true)
    {
      _invertedCollision.left = false;
      _invertedCollision.right = true;
    }

    if(this.right == true)
    {
      _invertedCollision.right = false;
      _invertedCollision.left = true;
    }

    if(this.bottom == true)
    {
      _invertedCollision.bottom = false;
      _invertedCollision.top = true;
    }

    return _invertedCollision;
  }
};
