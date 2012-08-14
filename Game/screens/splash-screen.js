SplashScreen.prototype = new BaseScreen();

function SplashScreen()
{
  this.m_type = ScreenType.SplashScreen;

  this.m_image = new Sprite("images/screens/SplashScreen.png", 900, 600);
  
  this.m_startBounds = new BoundingBox(null, 880, 650, 180, 120);
  
  this.m_topBar = new Sprite("images/topbar.png", 1300, 200);
  this.m_sideBar = new Sprite("images/siderbar.png", 200, 1000);
};

SplashScreen.prototype.Update = function(dt, mouseX, mouseY,
                                         leftClickOccurred, leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
    //Check for click on start button.
    if(this.m_startBounds.CheckForPointCollision(mouseX, mouseY) == true)
    {
      return ScreenType.MapScreen;
    }
  }
  
  return null;
};

SplashScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 200, 200, 0, 0, 1);
  
  this.m_topBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_topBar.Draw(context, 0, 1100, 0, 0, 1);
  this.m_sideBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_sideBar.Draw(context, 1100, 0, 0, 0, 1);
};

