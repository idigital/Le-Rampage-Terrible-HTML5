CreditsScreen2.prototype = new BaseScreen();

function CreditsScreen2()
{
  this.m_type = ScreenType.CreditsScreen2;

  this.m_image = new Sprite("images/screens/CreditsScreen2.png", 900, 600);

  this.m_clickBounds = new BoundingBox(null, 200, 200, 900, 600);
  
  this.m_topBar = new Sprite("images/topbar.png", 1300, 200);
  this.m_sideBar = new Sprite("images/siderbar.png", 200, 1000);
};

CreditsScreen2.prototype.Update = function(dt, mouseX, mouseY,
                                          leftClickOccurred,
                                          leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
    //Check for click on start button.
    if(this.m_clickBounds.CheckForPointCollision(mouseX, mouseY) == true)
    {
      return ScreenType.Restart;
    }
  }
  
  return null;
};

CreditsScreen2.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 200, 200, 0, 0, 1);
  
  this.m_topBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_topBar.Draw(context, 0, 1100, 0, 0, 1);
  this.m_sideBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_sideBar.Draw(context, 1100, 0, 0, 0, 1);
};

