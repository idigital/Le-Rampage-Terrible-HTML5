GameScreen.prototype = new BaseScreen();

function GameScreen()
{
  this.m_type = ScreenType.GameScreen;

  this.m_level;

  this.m_editMode = false;
  this.m_editor;
  this.m_editorButton;
  this.m_editorBounds;

  //this.Initialise(levelData)
  //{
    this.m_level = new Level();

    this.m_editor = new Editor(this.m_level);
    this.m_editorButton = new Sprite("images/editButton.png", 32, 32);
    this.m_editorBounds = new BoundingBox(null, 868, 0, 32, 32);
  //};
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
                         leftClickOccured, leftReleaseOccured);
  }
  else
  {
    this.m_level.Update(dt, mouseX, mouseY,
                        leftClickOccured, leftReleaseOccured);
  }
};

GameScreen.prototype.Draw = function(context)
{
  if(this.m_editMode == true)
  {
    this.m_editor.Draw(context);
  }
  else
  {
    this.m_level.Draw(context);
  }

  this.m_editorButton.Draw(context, 868, 0, 0, 0);
};

