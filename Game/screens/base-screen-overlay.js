//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

function BaseScreenOverlay()
{
  this.m_x = 150;
  this.m_y = 100;
	
  this.m_width = 600;
  this.m_height = 400;
};

BaseScreenOverlay.prototype.Update = function(dt, mouseX, mouseY,
                                              leftClick, leftRelease)
{
  //Implement method in inherited class.
};

BaseScreenOverlay.prototype.Draw = function(context)
{
  //Implement method in inherited class.
};
