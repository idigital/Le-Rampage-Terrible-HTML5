Section.prototype = new GameObject();

function Section(physics, foregroundImage, foregroundImageTransparent, backgroundImage, x, y)
{
  //Constants.
  Section.SECTION_WIDTH = 256;
  Section.SECTION_HEIGHT = 192;
  
  this.m_foregroundImage = foregroundImage;
  this.m_foregroundImageTransparent = foregroundImageTransparent;
  this.m_backgroundImage = backgroundImage;
  this.m_x = x;
  this.m_y = y;
  this.m_width = Section.SECTION_WIDTH;
  this.m_height = Section.SECTION_HEIGHT;

  this.m_type = ObjectType.Section;
  
  this.m_transparentForeground = false;
  
  this.EnablePhysics(physics, false);

  this.Draw = function(context, screenX, screenY)
  {
	if(this.m_transparentForeground != true)
	{
      this.m_foregroundImage.Draw(context, this.m_x, this.m_y, screenX, screenY);
	}
	else
	{
	  this.m_backgroundImage.Draw(context, this.m_x, this.m_y, screenX, screenY);
	  //this.m_foregroundImageTransparent.Draw(context, this.m_x, this.m_y, screenX, screenY);
	}
  }
};

