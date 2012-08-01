CreditsScreen.prototype = new GameScreen();

function CreditsScreen()
{
  this.m_type = ScreenType.CreditsScreen;

  this.m_image = new Sprite("images/screens/CreditsScreen.png", 900, 600);
};

CreditsScreen.prototype.Update = function(dt, mouseX, mouseY,
                                          leftClickOccurred,
                                          leftReleaseOccurred)
{
	
};

CreditsScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 0, 0, 0, 0);
};

