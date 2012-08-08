SectionType = { DESTRUCTABLE : "destructable",
                PASSABLE : "passable",
                IMPASSABLE : "impassable"
	       };
		   
SectionValue = { //Destructable.
                 BRONZE : "bronze",
                 SILVER : "silver",
                 GOLD : "gold",
                 //Passable.
                 PLAIN : "plain",
                 //Impassable.
                 BILLBOARD1 : "billboard1",
                 BILLBOARD2 : "billboard2",
                 BILLBOARD3 : "billboard3"
           };

Section.prototype = new GameObject();

function Section(physics, foregroundImage, backgroundImage, x, y, sectionType, sectionValue)
{
  //Constants.
  Section.SECTION_WIDTH = 256;
  Section.SECTION_HEIGHT = 192;
  
  this.m_foregroundImage = foregroundImage;
  this.m_backgroundImage = backgroundImage;
  this.m_x = x;
  this.m_y = y;
  this.m_width = Section.SECTION_WIDTH;
  this.m_height = Section.SECTION_HEIGHT;

  this.m_type = ObjectType.Section;
  this.m_sectionType = null;
  this.m_sectionValue = null;
  this.m_value = null;
  this.m_points = null;
  this.m_frame = 0;
  
  this.m_transparentForeground = false;
  
  this.EnablePhysics(physics, false);

  this.Draw = function(context, screenX, screenY, scale)
  {
	if(this.m_transparentForeground != true)
	{
      this.m_foregroundImage.DrawFrame(context, this.m_frame, this.m_x, this.m_y, screenX, screenY, scale);
	}
	else
	{
	  this.m_backgroundImage.Draw(context, this.m_x, this.m_y, screenX, screenY, scale);
	}
  }
  
  this.ChangeType = function(sectionType, sectionValue)
  {
    this.m_sectionType = sectionType;
    this.m_sectionValue = sectionValue;
	
    if(sectionType == SectionType.DESTRUCTABLE)
    {
      if(sectionValue == SectionValue.BRONZE)
      {
        this.m_frame = 0;
	  }
	  else if(sectionValue == SectionValue.SILVER)
	  {
        this.m_frame = 1;
	  }
	  else if(sectionValue == SectionValue.GOLD)
	  {
        this.m_frame = 2;
	  }
    }
    else if(sectionType == SectionType.PASSABLE)
    {
      if(sectionValue == SectionValue.PLAIN)
      {
        this.m_frame = 0;
      }
    }
    else if(sectionType == SectionType.IMPASSABLE)
    {
      if(sectionValue == SectionValue.BILLBOARD1)
      {
        this.m_frame = 0;
      }
      else if(sectionValue == SectionValue.BILLBOARD2)
      {
        this.m_frame = 1;
      }
      else if(sectionValue == SectionValue.BILLBOARD3)
      {
        this.m_frame = 2;
      }
    }
  }
  
  this.ChangeType(sectionType, sectionValue);
};
