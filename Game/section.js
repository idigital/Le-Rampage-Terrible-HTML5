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
  this.m_value = null;// = sectionType;
  this.m_points = null;// = sectionValue;
  
  if(sectionType == SectionType.DESTRUCTABLE)
  {
    if(sectionValue == SectionValue.BRONZE)
	{
	
	}
	else if(sectionValue == SectionValue.SILVER)
	{
	
	}
	else if(sectionValue == SectionValue.GOLD)
	{
	
	}
  }
  else if(sectionType == SectionType.PASSABLE)
  {
  
  }
  else if(sectionType == SectionType.IMPASSABLE)
  {
  
  }
  
  this.m_transparentForeground = false;
  
  this.EnablePhysics(physics, false);

  this.Draw = function(context, screenX, screenY, scale)
  {
	if(this.m_transparentForeground != true)
	{
      this.m_foregroundImage.Draw(context, this.m_x, this.m_y, screenX, screenY, scale);
	}
	else
	{
	  this.m_backgroundImage.Draw(context, this.m_x, this.m_y, screenX, screenY, scale);
	}
  }
};

