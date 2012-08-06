MapScreen.prototype = new BaseScreen();

function MapScreen()
{
  this.m_type = ScreenType.MapScreen;

  this.m_image = new Sprite("images/screens/MapScreen.png", 900, 600);
  
  this.m_cityBounds = new BoundingBox(null, 110, 300, 90, 100);
};

MapScreen.prototype.Update = function(dt, mouseX, mouseY,
                                      leftClickOccurred, leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
	//Check for click on city.
	if(this.m_cityBounds.CheckForPointCollision(mouseX, mouseY) == true)
	{
		return ScreenType.GameScreen;
	}
  }

  return null;
};

MapScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 0, 0, 0, 0, 1);
};

