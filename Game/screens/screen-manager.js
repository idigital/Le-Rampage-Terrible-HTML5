ScreenType = { SplashScreen : "splashScreen",
               //MenuScreen : "menuScreen",
               MapScreen : "mapScreen",
               GameScreen : "gameScreen",
               //EndScreen : "endScreen",
               CreditsScreen : "creditsScreen"
};

function ScreenManager()
{
  var m_screens = new Array();
  this.m_currentScreen = null;

  //Set up game's screens.
  m_screens.push(new SplashScreen());
  //m_screens.push(new MenuScreen());
  m_screens.push(new MapScreen());
  m_screens.push(new GameScreen());
  //m_screens.push(new EndScreen());
  m_screens.push(new CreditsScreen());

  this.Update = function(dt, mouseX, mouseY,
                         leftClickOccurred, leftReleaseOccurred)
  {
    var _moveToScreen = this.m_currentScreen.Update(dt, mouseX, mouseY,
                                                    leftClickOccurred,
                                                    leftReleaseOccurred);

    if(_moveToScreen != null)
    {
      this.SetCurrentScreen(_moveToScreen);
    }
  };

  this.Draw = function(context)
  {
    this.m_currentScreen.Draw(context);
  };

  this.SetCurrentScreen = function(screenType)
  {
    for(i = 0; i < m_screens.length; i++)
    {
      if(m_screens[i].m_type == screenType)
      {
        this.m_currentScreen = m_screens[i];
      }
    }
  };

  //Set initial screen.
  this.SetCurrentScreen(ScreenType.SplashScreen);
};

