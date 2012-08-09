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
                 BILLBOARD3 : "billboard3",
				 BILLBOARD4 : "billboard4",
                 BILLBOARD5 : "billboard5",
                 BILLBOARD6 : "billboard6",
				 BILLBOARD7 : "billboard7",
                 BILLBOARD8 : "billboard8",
                 BILLBOARD9 : "billboard9"
           };

Section.prototype = new GameObject();

function Section(physics,
                 foregroundImage, backgroundImage,
                 passableForegroundImage, passableBackgroundImage,
                 impassableImage,
                 x, y, sectionType, sectionValue)
{
  //Constants.
  Section.SECTION_WIDTH = 256;
  Section.SECTION_HEIGHT = 192;
  
  this.m_foregroundImage = foregroundImage;
  this.m_backgroundImage = backgroundImage;
  this.m_passableForegroundImage = passableForegroundImage;
  this.m_passableBackgroundImage = passableBackgroundImage;
  this.m_impassableImage = impassableImage;

  this.m_x = x;
  this.m_y = y;
  this.m_width = Section.SECTION_WIDTH;
  this.m_height = Section.SECTION_HEIGHT;

  this.m_currentForegroundImage = this.m_foregroundImage;
  this.m_currentBackgroundImage = this.m_backgroundImage;

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
      this.m_currentForegroundImage.DrawFrame(context, this.m_frame, this.m_x, this.m_y, screenX, screenY, scale);
	}
	else
	{
	  this.m_currentBackgroundImage.DrawFrame(context, this.m_frame, this.m_x, this.m_y, screenX, screenY, scale);
	}
  }
  
  this.ChangeType = function(sectionType, sectionValue)
  {
    this.m_sectionType = sectionType;
    this.m_sectionValue = sectionValue;
	
    if(sectionType == SectionType.DESTRUCTABLE)
    {
	  this.m_currentForegroundImage = this.m_foregroundImage;
	  this.m_currentBackgroundImage = this.m_backgroundImage;
	  
      if(sectionValue == SectionValue.BRONZE)
      {
        this.m_frame = 0;
		this.m_value = ScoreObjectType.BUILDING_BRONZE;
		this.m_points = ScoreHandler.BRONZE_BUILDING_POINTS;
	  }
	  else if(sectionValue == SectionValue.SILVER)
	  {
        this.m_frame = 1;
		this.m_value = ScoreObjectType.BUILDING_SILVER;
		this.m_points = ScoreHandler.SILVER_BUILDING_POINTS;
	  }
	  else if(sectionValue == SectionValue.GOLD)
	  {
        this.m_frame = 2;
		this.m_value = ScoreObjectType.BUILDING_GOLD;
		this.m_points = ScoreHandler.GOLD_BUILDING_POINTS;
	  }
    }
    else if(sectionType == SectionType.PASSABLE)
    {
      this.m_currentForegroundImage = this.m_passableForegroundImage;
      this.m_currentBackgroundImage = this.m_passableBackgroundImage;
	  
      if(sectionValue == SectionValue.PLAIN)
      {
        this.m_frame = 1;
		this.m_value = null;
		this.m_points = null;
      }
    }
    else if(sectionType == SectionType.IMPASSABLE)
    {
      this.m_currentForegroundImage = this.m_impassableImage;
      this.m_currentBackgroundImage = this.m_backgroundImage;
	  
      if(sectionValue == SectionValue.BILLBOARD1){ this.m_frame = 0; }
      else if(sectionValue == SectionValue.BILLBOARD2){ this.m_frame = 1; }
      else if(sectionValue == SectionValue.BILLBOARD3){ this.m_frame = 2; }
      else if(sectionValue == SectionValue.BILLBOARD4){ this.m_frame = 3; }
      else if(sectionValue == SectionValue.BILLBOARD5){ this.m_frame = 4; }
      else if(sectionValue == SectionValue.BILLBOARD6){ this.m_frame = 5; }
	  else if(sectionValue == SectionValue.BILLBOARD7){ this.m_frame = 6; }
      else if(sectionValue == SectionValue.BILLBOARD8){ this.m_frame = 7; }
      else if(sectionValue == SectionValue.BILLBOARD9){ this.m_frame = 8; }
	  
      this.m_value = null;
      this.m_points = null;
    }
  }
  
  this.ChangeType(sectionType, sectionValue);
};
