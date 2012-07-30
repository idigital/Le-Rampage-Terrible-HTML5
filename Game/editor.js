function Editor(level)
{
  var m_currentLevel = level;

  this.Update = function(dt, mouseX, mouseY, leftClick, leftRelease)
  {
    if(leftClick == true)
    {
      this.MouseClick(mouseX, mouseY);
    }

    if(leftRelease == true)
    {
      this.MouseRelease(mouseX, mouseY);
    }

    //Respond to mouse movement.
    this.MouseMove(mouseX, mouseY);

  }

  this.Draw = function(context)
  {
    m_currentLevel.Draw(context);
  }

  this.MouseClick = function(mouseX, mouseY)
  {

  }

  this.MouseRelease = function(mouseX, mouseY)
  {

  }

  this.MouseMove = function(mouseX, mouseY)
  {

  }
};

