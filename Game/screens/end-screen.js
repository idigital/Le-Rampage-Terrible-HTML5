//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

EndScreen.prototype = new BaseScreen();

function EndScreen()
{
  this.m_type = ScreenType.EndScreen;

  this.m_image = new Sprite("images/screens/EndScreen.png", 900, 600);
  this.m_scoreImage = new Sprite("images/ui/Ui-End-Score.png", 160, 90);
  this.m_timeImage = new Sprite("images/ui/Ui-End-Time.png", 105, 90);
  this.m_numbers = new AnimatedSprite("images/ui/Ui-End-Numbers.png", null, 48, 96, 10);

  this.m_clickBounds = new BoundingBox(null, 200, 200, 900, 600);
  
  this.m_topBar = new Sprite("images/topbar.png", 1300, 200);
  this.m_sideBar = new Sprite("images/sidebar.png", 200, 1000);
};

EndScreen.prototype.Update = function(dt, mouseX, mouseY,
                                      leftClickOccurred, leftReleaseOccurred)
{
  if(leftClickOccurred == true)
  {
    //Check for click on start button.
    if(this.m_clickBounds.CheckForPointCollision(mouseX, mouseY) == true)
    {
      return ScreenType.CreditsScreen1;
    }
  }
  
  return null;

};

EndScreen.prototype.Draw = function(context)
{
  this.m_image.Draw(context, 200, 200, 0, 0, 1);

  this.m_topBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_topBar.Draw(context, 0, 1100, 0, 0, 1);
  this.m_sideBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_sideBar.Draw(context, 1100, 0, 0, 0, 1);
  
  this.m_scoreImage.Draw(context, 500, 600, 0, 0, 1);
  this.DrawNumberLarge(context, Game.FinalScore, 680, 600);
  this.m_timeImage.Draw(context, 500, 700, 0, 0, 1);
  this.DrawNumberLarge(context, Game.RemainingTime, 680, 700);
};

  //**************************************************************************
  //
  //**************************************************************************
  EndScreen.prototype.DrawNumberLarge = function(context, number, x, y)
  {
    //Find number of digits.
    var _numDigits = 0;
    var _temp = number;

    while(_temp > 1)
    {
      _temp /= 10;
      _numDigits++;
    }

    //Get each digit and draw each number.
    for(digit = 0; digit < _numDigits; digit++)
    {
      _digit = Math.floor(number / (Math.pow(10, digit)) % 10);

      var _xPos = x + (this.m_numbers.m_width * (_numDigits - digit));

      this.m_numbers.DrawFrame(context,
            _digit, _xPos, y, 0, 0, 1);
    }

    if(number < 1 && number > 0)
    {
      this.m_numbers.DrawFrame(context,
            _digit, x, y, 0, 0, 1);

    }
  }
