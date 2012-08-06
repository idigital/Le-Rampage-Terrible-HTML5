EndScreen.prototype = new BaseScreen();

function EndScreen()
{
  this.m_type = ScreenType.EndScreen;

  this.m_image = new Sprite("images/screens/EndScreen.png", 900, 600);
};

EndScreen.prototype.Update = function(dt, mouseX, mouseY,
                                      leftClickOccurred, leftReleaseOccurred)
{
	
};

EndScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 0, 0, 0, 0, 1);
};

