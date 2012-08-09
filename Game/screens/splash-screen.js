SplashScreen.prototype = new BaseScreen();

function SplashScreen()
{
  this.m_type = ScreenType.SplashScreen;

  this.m_image = new Sprite("images/screens/SplashScreen.png", 900, 600);
  
  this.m_startBounds = new BoundingBox(null, 680, 450, 180, 120);
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
  this.m_image.Draw(context, 0, 0, 0, 0, 1);
};

