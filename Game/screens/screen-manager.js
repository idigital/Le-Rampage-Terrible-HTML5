//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

ScreenType = { SplashScreen : "splashScreen",
               MapScreen : "mapScreen",
               GameScreen : "gameScreen",
               EndScreen : "endScreen",
               CreditsScreen1 : "creditsScreen1",
               CreditsScreen2 : "creditsScreen2",
               Restart : "restart"
};

function ScreenManager()
{
  var m_screens = new Array();
  this.m_currentScreen = null;

  //Set up game's screens.
  m_screens.push(new SplashScreen());
  m_screens.push(new MapScreen());
  m_screens.push(new GameScreen());
  m_screens.push(new EndScreen());
  m_screens.push(new CreditsScreen1());
  m_screens.push(new CreditsScreen2());

  this.m_restart = false;

  this.Update = function(dt, mouseX, mouseY,
                         leftClickOccurred, leftReleaseOccurred)
  {
    var _moveToScreen = this.m_currentScreen.Update(dt, mouseX, mouseY,
                                                    leftClickOccurred,
                                                    leftReleaseOccurred);

    if(_moveToScreen != null)
    {
      if(_moveToScreen == ScreenType.Restart)
      {
        this.m_restart = true;
      }
      else
      {
        this.SetCurrentScreen(_moveToScreen);
      }
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

  this.Restart = function()
  {
    this.m_restart = false;

    m_screens = [];

    this.m_currentScreen = null;

    //Set up game's screens.
    m_screens.push(new SplashScreen());
    m_screens.push(new MapScreen());
    m_screens.push(new GameScreen());
    m_screens.push(new EndScreen());
    m_screens.push(new CreditsScreen1());
    m_screens.push(new CreditsScreen2());

    this.SetCurrentScreen(ScreenType.SplashScreen);
  }

  //Set initial screen.
  this.SetCurrentScreen(ScreenType.SplashScreen);
};

