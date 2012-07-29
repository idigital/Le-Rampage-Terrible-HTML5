function Vector(dx, dy)
{
  this.m_dx = dx;
  this.m_dy = dy;

  this.GetDistance = function()
  {
    return Math.sqrt((this.m_dx * this.m_dx) + (this.m_dy * this.m_dy));
  }
};

