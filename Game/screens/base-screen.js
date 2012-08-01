function BaseScreen()
{
  this.m_type;

  var m_overlays = null;

  this.m_active = false;
  this.m_draw = false;

  this.AddOverlay = function(overlay)
  {
    if(m_overlays == null)
    {
      m_overlays = new Array();
    }

    if(overlay != null)
    {
      m_overlays.push(overlay);
    }
  }

  this.RemoveTopOverlay = function()
  {
    if(m_overlays == null)
    {

    }
  }
};

BaseScreen.prototype.Update = function(dt, mouseX, mouseY,
                                       leftClickOccured, leftReleaseOccured)
{
  //Implement method in inherited class.
};

BaseScreen.prototype.Draw = function(context)
{
  //Implement method in inherited class.
};

