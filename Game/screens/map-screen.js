MapScreen.prototype = new BaseScreen();

function MapScreen()
{
  this.m_type = ScreenType.MapScreen;

  this.m_image = new Sprite("images/screens/MapScreen.png", 900, 600);
  
  this.m_cityBounds = new BoundingBox(null, 310, 500, 90, 100);
  
  this.m_topBar = new Sprite("images/topbar.png", 1300, 200);
  this.m_sideBar = new Sprite("images/siderbar.png", 200, 1000);
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
  this.m_image.Draw(context, 200, 200, 0, 0, 1);
  
  this.m_topBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_topBar.Draw(context, 0, 1100, 0, 0, 1);
  this.m_sideBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_sideBar.Draw(context, 1100, 0, 0, 0, 1);
};

