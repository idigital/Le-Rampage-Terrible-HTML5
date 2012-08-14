//****************************************************************************
//This file is subject to the terms and conditions defined in license.txt.
//****************************************************************************

GameScreen.prototype = new BaseScreen();

function GameScreen()
{
  this.m_type = ScreenType.GameScreen;

  this.m_level;

  this.m_editMode = false;
  this.m_editor;
  this.m_editorButton;
  this.m_editorBounds;
  
  this.m_levelFilename = "levels/level1.xml";

  this.m_level = new Level();
  this.m_level.LoadLevel(this.m_levelFilename);

  this.m_editor = new Editor(this.m_level);
  this.m_editorButton = new Sprite("images/editButton.png", 32, 32);
  this.m_editorBounds = new BoundingBox(null, 868, 0, 32, 32);
  
  this.m_topBar = new Sprite("images/topbar.png", 1300, 200);
  this.m_sideBar = new Sprite("images/sidebar.png", 200, 1000);
}

GameScreen.prototype.Update = function(dt, mouseX, mouseY,
                                       leftClickOccured, leftReleaseOccured)
{
  if(leftClickOccured == true
     && this.m_editorBounds.CheckForPointCollision(mouseX, mouseY))
  {
    if(this.m_editMode == true)
    {
      this.m_editMode = false;
	  
	  //Write edited level to file.
	  var _levelInfo = this.m_level.GetLevelDetails();
	  
	  var _xmlhttp;

      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        _xmlhttp = new XMLHttpRequest();
      }
      else
      {// code for IE6, IE5
        _xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      _xmlhttp.open("GET", "write-level.php?data=" + _levelInfo, false);
      _xmlhttp.send();
    }
    else if(this.m_editMode == false)
    {
      this.m_editMode = true;
    }

    leftClickOccured = false;
  }

  if(this.m_editMode == true)
  {
    this.m_editor.Update(dt, mouseX, mouseY,
                         this.m_level.m_screenX, this.m_level.m_screenY,
                         leftClickOccured, leftReleaseOccured);
  }
  else
  {
    this.m_level.Update(dt, mouseX, mouseY,
                        leftClickOccured, leftReleaseOccured);

    if(this.m_level.m_levelComplete == true)
    {
      //Player completed level. Go to score screen.
      return ScreenType.EndScreen;
    }
    else if(this.m_level.m_ranOutOfTime == true)
    {
      //Player ran out of time. Go to score screen.
      return ScreenType.EndScreen;
    }
  }

  return null;
};

GameScreen.prototype.Draw = function(context)
{
  if(this.m_editMode == true)
  {
    this.m_editor.Draw(context, this.m_level.m_screenX - 200, this.m_level.m_screenY - 200,
        this.m_level.m_scale);
  }
  else
  {
    this.m_level.Draw(context);
  }

  if(Game.EDIT_MODE == true)
  {
     this.m_editorButton.Draw(context, 868, 0, 0, 0, 1);
  }
  
  this.m_topBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_topBar.Draw(context, 0, 800, 0, 0, 1);
  this.m_sideBar.Draw(context, 0, 0, 0, 0, 1);
  this.m_sideBar.Draw(context, 1100, 0, 0, 0, 1);
};

