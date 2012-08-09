CreditsScreen1.prototype = new BaseScreen();

function CreditsScreen1()
{
  this.m_type = ScreenType.CreditsScreen1;

  this.m_image = new Sprite("images/screens/CreditsScreen1.png", 900, 600);

  this.m_clickBounds = new BoundingBox(null, 0, 0, 900, 600);
};

CreditsScreen1.prototype.Update = function(dt, mouseX, mouseY,
                                          leftClickOccurred,
                                          leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
    //Check for click on start button.
    if(this.m_clickBounds.CheckForPointCollision(mouseX, mouseY) == true)
    {
      return ScreenType.CreditsScreen2;
    }
  }
  
  return null;
};

CreditsScreen1.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 0, 0, 0, 0, 1);
};

