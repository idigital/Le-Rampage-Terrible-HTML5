MenuScreen.prototype = new BaseScreen();

function MenuScreen()
{
  this.m_type = ScreenType.MenuScreen;

  this.m_image = new Sprite("images/screens/MenuScreen.png", 900, 600);
};

MenuScreen.prototype.Update = function(dt, mouseX, mouseY,
                                       leftClickOccurred, leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
    return ScreenType.MapScreen;
  }

  return null;
};

MenuScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 0, 0, 0, 0);
};

