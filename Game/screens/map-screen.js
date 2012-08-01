MapScreen.prototype = new BaseScreen();

function MapScreen()
{
  this.m_type = ScreenType.MapScreen;

  this.m_image = new Sprite("images/screens/MapScreen.png", 900, 600);
};

MapScreen.prototype.Update = function(dt, mouseX, mouseY,
                                      leftClickOccurred, leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
    return ScreenType.GameScreen;
  }

  return null;
};

MapScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 0, 0, 0, 0);
};

