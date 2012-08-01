SplashScreen.prototype = new BaseScreen();

function SplashScreen()
{
  this.m_type = ScreenType.SplashScreen;

  this.m_image = new Sprite("images/screens/SplashScreen.png", 900, 600);
};

SplashScreen.prototype.Update = function(dt, mouseX, mouseY,
                                         leftClickOccurred, leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
    return ScreenType.MenuScreen;
  }

  return null;
};

SplashScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 0, 0, 0, 0);
};

